const Titulo = require('../models/Titulo');

class TituloController {
  async getTitulo(req, res) {
    let { id } = req.params;
    try {
      const titulo = await Titulo.findOne({
        where: id,
        attributes: ['nome', 'chave'],
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
