
# Используем образ Node.js
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы в контейнер
COPY . .

# Открываем порт, на котором будет запущен сервер
EXPOSE 5000

# Запускаем приложение
CMD ["node", "server.js"]
