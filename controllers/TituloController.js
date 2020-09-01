require('dotenv').config();
const QRCode = require('qrcode');

const Titulo = require('../models/Titulo');
const Proprietario = require('../models/Proprietario');

class TituloController {
  async index(req, res) {
    try {
      const titulos = await Titulo.findAll({
        attributes: [
          'processo',
          'logradouro',
          'numero',
          'complemento',
          'bairro',
          'quadra',
          'lote',
          'data_expedicao',
          'chave',
          'qrcode',
        ],
        order: [
          ['processo', 'ASC'],
          ['nome', 'ASC'],
        ],
        include: {
          model: Proprietario,
          attributes: ['nome', 'cpf'],
        },
      });
      return res.json(titulos);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async store(req, res) {
    try {
      const titulo = await Titulo.create(req.body);
      return res.json(titulo);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { chave } = req.params;
      if (!chave) {
        return res.status(400).json({
          erros: ['Título não informado'],
        });
      }
      const titulo = await Titulo.findOne({
        attributes: [
          'processo',
          'logradouro',
          'numero',
          'complemento',
          'bairro',
          'quadra',
          'lote',
          'data_expedicao',
          'chave',
          'qrcode',
        ],
        include: {
          model: Proprietario,
          attributes: ['nome', 'cpf'],
        },
        where: { chave },
      });
      if (!chave) {
        return res.status(400).json({
          erros: ['Título não existe'],
        });
      }
      const rotaAPI = '/api/v1/titulo/';
      const url = process.env.APP_URL + ':' + process.env.APP_PORT + rotaAPI + titulo.chave;
      titulo.qrcode = await QRCode.toDataURL(url);
      res.json({ titulo });
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Título não informado'],
        });
      }
      const titulo = await Titulo.findByPk(id);
      if (!titulo) {
        return res.status(400).json({
          erros: ['Título não existe'],
        });
      }
      const tituloAtualizado = await Titulo.update(req.body);
      return res.json(tituloAtualizado);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Título não informado'],
        });
      }
      const titulo = await Titulo.findByPk(id);
      if (!titulo) {
        return res.status(400).json({
          erros: ['Título não existe'],
        });
      }
      await proprietario.destroy();
      return res.json(proprietario);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }
}

module.exports = new TituloController();
