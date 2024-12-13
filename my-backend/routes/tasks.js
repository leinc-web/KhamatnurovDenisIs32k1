const express = require('express');
const { Task } = require('../models');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Получение всех задач
router.get('/', authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.user.id } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Создание новой задачи
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, listId } = req.body;

  try {
    const task = await Task.create({
      title,
      description,
      userId: req.user.id,
      listId,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Обновление задачи
router.put('/:id', authMiddleware, async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.userId !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Удаление задачи
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.userId !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await task.destroy();
    res.json({ message: 'Task removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
