const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User')(sequelize, Sequelize);
const Task = require('./Task')(sequelize, Sequelize);
const List = require('./List')(sequelize, Sequelize);

// Associations
User.hasMany(Task, { as: 'tasks', foreignKey: 'userId' });
User.hasMany(List, { as: 'lists', foreignKey: 'userId' });
List.hasMany(Task, { as: 'tasks', foreignKey: 'listId' });
Task.belongsTo(List, { foreignKey: 'listId', as: 'list' });

module.exports = {
  sequelize,
  User,
  Task,
  List,
};
