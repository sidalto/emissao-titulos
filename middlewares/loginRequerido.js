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
    const { id } = dados;
    const usuario = await Usuario.findOne({
      where: { id },
    });
    if (!usuario) {
      return res.status(401).json({
        erros: ['Dados inválidos'],
      });
    }
    req.id = id;
    req.cpf = usuario.cpf;
    req.nome = usuario.nome;
    req.tipo = usuario.tipo;
    return next();
  } catch (erro) {
    return res.status(401).json({
      erros: ['Token expirado ou inválido'],
    });
  }
}

module.exports = loginRequerido;