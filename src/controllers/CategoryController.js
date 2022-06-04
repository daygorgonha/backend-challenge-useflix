const Category = require('../models/Category');

module.exports = {
  async index(req, res) {
    const categories = await Category.findAll();

    return res.json(categories);
  },

  async show(req, res) {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    return res.json(category);
  },

  async store(req, res) {
    const { name, description } = req.body;

    const category = await Category.create({ name, description });

    return res.json(category);
  },

  async delete(req, res) {
    const { id } = req.params;

    await Category.destroy({ where: { id } });

    return res.send();
  }
}