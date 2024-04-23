const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");
const User = require("./Users.model");
const Companies = require("./Companies.model");
const Roles = require("./Roles.model");

const Employees = sequelize.define(
  "Employees",
  {
    employee_id: {
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
    company_id: {
      type: DataTypes.UUID,
      references: {
        model: Companies,
        key: "company_id",
      },
      allowNull: false,
    },
    role_id: {
      type: DataTypes.UUID,
      references: {
        model: Roles,
        key: "role_id",
      },
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    autoIncrement: false,
    tableName: "employees", // specify the table name explicitly
  }
);

module.exports = Employees;
