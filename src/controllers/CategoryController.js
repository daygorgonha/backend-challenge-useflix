const Category = require('../models/Category');

module.exports = {
  async store(req, res) {
    const { name, description } = req.body;

    const category = await Category.create({ name, description });

    return res.json(category);
  }
}