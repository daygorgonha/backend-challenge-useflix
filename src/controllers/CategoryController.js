const Category = require('../models/Category');

module.exports = {
  async index(req, res) {
    const category = await Category.findAll();

    return res.json(category);
  },

  async store(req, res) {
    const { name, description } = req.body;

    const category = await Category.create({ name, description });

    return res.json(category);
  }
}