const Movie = require('../models/Movie');

module.exports = { 
  async index(req, res) {
    const movies = await Movie.findAll({
      attributes: [
        'id',
        'name',
        'classification',
        'created_at',
        'updated_at'
      ],
      include: { association: 'category', attributes: ['name'],
      } 
    });
     
    return res.json(movies);
  },


  async show(req, res) {
    const { id } = req.params;

    const movie = await Movie.findByPk(id);

    return res.json(movie);
  },


  async store(req, res) {
    const { category_id, name, classification } = req.body;

    const movie = await Movie.create({ 
      category_id, 
      name, 
      classification,
    });

    return res.json(movie);
  },

  async delete(req, res) {
    const { id } = req.params;

    await Movie.destroy({ where: { id } });

    return res.send();
  }
};