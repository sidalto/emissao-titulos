const Proprietario = require('../models/Proprietario');

class ProprietarioController {
  async index(req, res) {
    try {
      const proprietarios = await Proprietario.findAll({
        attributes: [
          'nome',
          'cpf',
          'rg',
          'profissao',
          'estado_civil',
          'conjuge_nome',
          'conjuge_rg',
          'conjuge_cpf',
        ],
        order: ['nome', 'ASC'],
      });
      return res.json(proprietarios);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async store(req, res) {
    try {
      const proprietario = await Proprietario.create(req.body);
      return res.json(proprietario);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Proprietário não informado'],
        });
      }
      const proprietario = await Proprietario.findByPk(id, {
        attributes: [
          'nome',
          'cpf',
          'rg',
          'profissao',
          'estado_civil',
          'conjuge_nome',
          'conjuge_rg',
          'conjuge_cpf',
        ],
        order: ['nome', 'ASC'],
      });
      if (!proprietario) {
        return res.status(400).json({
          erros: ['Proprietário não existe'],
        });
      }
      return res.json(proprietario);
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
          erros: ['Proprietário não informado'],
        });
      }
      const proprietario = await Proprietario.findByPk(id);
      if (!proprietario) {
        return res.status(400).json({
          erros: ['Proprietário não existe'],
        });
      }
      const proprietarioAtualizado = await Proprietario.update(req.body);
      return res.json(proprietarioAtualizado);
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
          erros: ['Proprietário não informado'],
        });
      }
      const proprietario = await Proprietario.findByPk(id);
      if (!proprietario) {
        return res.status(400).json({
          erros: ['Proprietário não existe'],
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

module.exports = new ProprietarioController();
