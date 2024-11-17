const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Моковая база данных
let users = [];
let channels = [];
let messages = [];

// Регистрация пользователя
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const userExists = users.find((u) => u.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'Пользователь уже существует' });
    }
    users.push({ username, password });
    res.json({ success: true });
});

// Авторизация пользователя
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ success: false, message: 'Неверные данные' });
    }
    res.json({ success: true });
});

// CRUD для каналов
app.get('/channels', (req, res) => res.json(channels));
app.post('/channels', (req, res) => {
    const { name } = req.body;
    const newChannel = { id: channels.length + 1, name };
    channels.push(newChannel);
    res.json(newChannel);
});
app.put('/channels/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const channel = channels.find((ch) => ch.id === parseInt(id));
    if (!channel) {
        return res.status(404).json({ message: 'Канал не найден' });
    }
    channel.name = name;
    res.json(channel);
});
app.delete('/channels/:id', (req, res) => {
    const { id } = req.params;
    channels = channels.filter((ch) => ch.id !== parseInt(id));
    res.json({ success: true });
});

// CRUD для сообщений
app.get('/channels/:id/messages', (req, res) => {
    const { id } = req.params;
    const channelMessages = messages.filter((msg) => msg.channelId === parseInt(id));
    res.json(channelMessages);
});
app.post('/channels/:id/messages', (req, res) => {
    const { id } = req.params;
    const { content, author } = req.body;
    const newMessage = { id: messages.length + 1, channelId: parseInt(id), content, author };
    messages.push(newMessage);
    res.json(newMessage);
});
app.delete('/channels/:channelId/messages/:messageId', (req, res) => {
    const { channelId, messageId } = req.params;
    messages = messages.filter((msg) => !(msg.channelId === parseInt(channelId) && msg.id === parseInt(messageId)));
    res.json({ success: true });
});

// Запуск сервера
const PORT = 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
