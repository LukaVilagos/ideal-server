const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "ideal",
  username: "ideal_admin",
  password: "AEgPt6b9rxw2w3lx",
});

module.exports = sequelize;
