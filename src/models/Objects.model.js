const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");
const Employees = require("./Employees.model");
const Object_templates = require("./Object_templates.model");

const Objects = sequelize.define(
  "Objects",
  {
    object_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    object_name: { type: DataTypes.STRING, allowNull: false },
    object_template_id: {
      type: DataTypes.UUID,
      references: {
        model: Object_templates,
        key: "object_template_id",
        onDelete: "CASCADE",
      },
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.UUID,
      references: {
        model: Employees,
        key: "employee_id",
        onDelete: "CASCADE",
      },
      allowNull: false,
    },
  },
  {
    timestamps: false,
    autoIncrement: false,
    tableName: "objects", // specify the table name explicitly
  }
);

module.exports = Objects;
