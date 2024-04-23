const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");
const Object_templates = require("./Object_templates.model");

const Object_template_elements = sequelize.define(
  "Object_templates_elements",
  {
    object_template_element_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    object_template_id: {
      type: DataTypes.UUID,
      references: {
        model: Object_templates,
        key: "object_template_id",
        onDelete: "CASCADE",
      },
      allowNull: false,
    },
    object_template_element_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    object_template_element_type: {
      type: DataTypes.STRING,
      allowNull: true, // can it be null
    },
    object_template_element_options: {
      type: DataTypes.JSONB,
    },
    object_template_element_image_count: {
      type: DataTypes.INTEGER,
      validator: { min: 0, max: 2 },
    },
    object_template_element_images_column_count: {
      type: DataTypes.INTEGER,
      validator: { min: 0, max: 2 },
    },
    object_templatet_element_length: {
      type: DataTypes.STRING,
      validator: {
        min: 0,
        max: 10,
      },
    },
    object_template_element_orientation: {
      type: DataTypes.STRING,
      validator: {
        min: 0,
        max: 10,
      },
    },
    object_template_element_break_count: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    autoIncrement: false,
    tableName: "object_template_elements", // specify the table name explicitly
  }
);

module.exports = Object_template_elements;
