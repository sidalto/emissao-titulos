const Titulo = require('../models/Titulo');

class TituloController {
  async getTitulo(req, res) {
    try {
      const titulo = await Titulo.findByPK({
        attributes: ['id', 'nome'],
        include: {
          model: Proprietario,
          attributes: [],
        },
      });
      return res.json(titulo);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }
}

module.exports = new TituloController();
