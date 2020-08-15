const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

class TokenController {
  async store(req, res) {
    const { cpf = '', senha = '' } = req.body;
    if (!cpf || !senha) {
      return res.status(401).json({
        erros: ['Credenciais não fornecidas'],
      });
    }
    const usuario = await Usuario.findOne({ where: { cpf } });
    if (!usuario || !(await usuario.verificaSenha(senha))) {
      return res.status(401).json({
        erros: ['Usuário ou senha incorretos'],
      });
    }
    // if (!usuario) {
    //   return res.status(401).json({
    //     erros: ['Usuário não existe'],
    //   });
    // }
    // if (!(await usuario.verificaSenha(senha))) {
    //   return res.status(401).json({
    //     erros: ['Senha inválida'],
    //   });
    // }
    const { id } = usuario;
    const token = jwt.sign({ id, nome }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

module.exports = new TokenController();