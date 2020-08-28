const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

async function permissaoRequerida(req, res, next) {
  try {
    if (req.tipo !== 'A') {
      return res.status(401).json({
        erros: ['Usuário sem permissão'],
      });
    }
    return next();
  } catch (erro) {
    return res.status(401).json({
      erros: ['Acesso não autorizado'],
    });
  }
}

module.exports = permissaoRequerida;