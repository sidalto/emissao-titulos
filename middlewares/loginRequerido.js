const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

async function loginRequerido(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      erros: ['Login requerido'],
    });
  }
  const [, token] = authorization.split(' ');
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, nome } = dados;
    const usuario = await Usuario.findOne({
      where: {
        id,
        nome,
      },
    });
    if (!usuario) {
      return res.status(401).json({
        erros: ['Dados inválidos'],
      });
    }
    req.id = id;
    req.nome = nome;
    return next();
  } catch (erro) {
    return res.status(401).json({
      erros: ['Token expirado ou inválido'],
    });
  }
}

module.exports = loginRequerido;