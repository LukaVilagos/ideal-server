const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");
const Report_templates = require("./Report_templates.model");
const Object_templates = require("./Object_templates.model");

const Report_template_elements = sequelize.define(
  "Report_template_elements",
  {
    report_template_element_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    report_template_id: {
      type: DataTypes.UUID,
      references: {
        model: Report_templates,
        key: "report_template_id",
        onDelete: "CASCADE",
      },
      allowNull: false,
    },
    report_template_element_name: { type: DataTypes.STRING, allowNull: false },
    report_template_element_type: { type: DataTypes.STRING },
    report_template_element_options: {
      type: DataTypes.JSONB,
    },
    report_template_element_image_count: {
      type: DataTypes.INTEGER,
      validator: { min: 0, max: 2 },
    },
    report_template_element_images_column_count: {
      type: DataTypes.INTEGER,
      validator: { min: 0, max: 2 },
    },
    object_template_id: {
      type: DataTypes.UUID,
      references: {
        model: Object_templates,
        key: "object_template_id",
        onDelete: "CASCADE",
      },
    },
    report_template_element_signature_text: {
      type: DataTypes.STRING,
      validator: { min: 0, max: 255 },
    },
    report_template_element_signature_position: {
      type: DataTypes.STRING,
      validator: { min: 0, max: 10 },
    },
    report_template_element_length: {
      type: DataTypes.STRING,
      validator: { min: 0, max: 10 },
    },
    report_template_element_orientation: {
      type: DataTypes.STRING,
      validator: { min: 0, max: 10 },
    },
    report_template_element_break_count: {
      type: DataTypes.INTEGER,
    },
    is_required: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    autoIncrement: false,
    tableName: "report_template_elements", // specify the table name explicitly
  }
);

module.exports = Report_template_elements;
