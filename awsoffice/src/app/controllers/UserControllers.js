const { User } = require('../models');

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
        if (user === null) {
            return res.status(404).json ({ message: 'Usuário não encontrado'});
        } else {
            return res.json(user);
        }
    } catch (err) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
  }

  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ message: 'Falha ao cadastrar usuário campo não preenchido' });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      await user.update(req.body);

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ message: 'Falha ao atualizar' });
    }
  }

  async destroy(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      await user.destroy();
        
      return res.status(200).json({ message: 'Empregado deletado com sucesso'});
    } catch (err) {
      return res.status(404).json({ message: 'Empregado não existente' });
    }
  }
}

module.exports = new UserController();