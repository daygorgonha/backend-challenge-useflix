const Category = require('../models/Category');

module.exports = {
  async index(req, res) {
    const categories = await Category.findAll();

    return res.json(categories);
  },

  async show(req, res) {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if(!category) {
      return res.status(404).json({ error: 'Category not found!'})
    }

    return res.json(category);
  },

  async store(req, res) {
    const { name, description } = req.body;

    const categoryAlreadyExists = await Category.findOne({
      where: { name }
    });

    if(categoryAlreadyExists) {
      return res.status(400).json({ error: 'Category already exists!'})
    }

    const category = await Category.create({ name, description });

    return res.json(category);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;

    const category = await Category.findByPk(id);

    if(!category) {
      return res.status(404).json({ error: 'Category not found!'})
    }

    const categoryNameExisting = await Category.findOne({
      where: { name }
    });

    if(categoryNameExisting) {
      return res.status(400).json({ error: 'Category already exists!'})
    }

    const categoryUpdate = await Category.update({ name, description }, {
      where: { id },
      returning: true,
      plain: true
    });

    return res.json(categoryUpdate[1].dataValues);
  },

  async delete(req, res) {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if(!category) {
      return res.status(400).json({ error: 'Category not found!'})
    }

    try {
      await Category.destroy({ where: { id } });
    } catch (error) {
      return res.status(400).json({ 
        error: 'Category cannot be removed as it contains movies!'
      })
    }
    
    return res.send();
  }
}