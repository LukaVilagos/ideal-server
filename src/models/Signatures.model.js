const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");
const User = require("./Users.model");

const Signatures = sequelize.define("Signatures", {
  signature_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: "user_id",
      onDelete: "CASCADE",
    },
    allowNull: false,
  },
});

module.exports = Signatures;
