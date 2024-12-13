const express = require('express');
const { List, Task } = require('../models');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Получение всех списков
router.get('/', authMiddleware, async (req, res) => {
  try {
    const lists = await List.findAll({
      where: { userId: req.user.id },
      include: [{ model: Task, as: 'tasks' }],
    });
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Создание нового списка
router.post('/', authMiddleware, async (req, res) => {
  const { name } = req.body;

  try {
    const list = await List.create({
      name,
      userId: req.user.id,
    });

    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Обновление списка
router.put('/:id', authMiddleware, async (req, res) => {
  const { name } = req.body;

  try {
    const list = await List.findByPk(req.params.id);

    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    if (list.userId !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    list.name = name || list.name;

    await list.save();
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Удаление списка
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const list = await List.findByPk(req.params.id);

    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    if (list.userId !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await list.destroy();
    res.json({ message: 'List removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
