const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");
const Objects = require("./Objects.model");
const Object_template_elements = require("./Objects_template_elements.model");

const Object_elements = sequelize.define(
  "Object_elements",
  {
    object_element_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    object_id: {
      type: DataTypes.UUID,
      references: {
        model: Objects,
        key: "object_id",
        onDelete: "CASCADE",
      },
      allowNull: false,
    },
    object_template_element_id: {
      type: DataTypes.UUID,
      references: {
        model: Object_template_elements,
        key: "object_template_element_id",
        onDelete: "CASCADE",
      },
      allowNull: false,
    },
    object_element_value: {
      type: DataTypes.JSONB,
    },
  },
  {
    timestamps: false,
    autoIncrement: false,
    tableName: "object_elements", // specify the table name explicitly
  }
);

module.exports = Object_elements;
