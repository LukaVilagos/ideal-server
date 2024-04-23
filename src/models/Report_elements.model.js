const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");
const Reports = require("./Reports.model");
const Report_template_elements = require("./Report_template_elements.model");

const Report_elements = sequelize.define(
  "Report_elements",
  {
    report_element_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    report_id: {
      type: DataTypes.UUID,
      references: {
        model: Reports,
        key: "report_id",
        onDelete: "CASCADE",
      },
      allowNull: false,
    },
    report_template_element_id: {
      type: DataTypes.UUID,
      references: {
        model: Report_template_elements,
        key: "report_template_element_id",
        onDelete: "CASCADE",
      },
      allowNull: false,
    },
    report_element_value: {
      type: DataTypes.JSONB,
    },
  },
  {
    timestamps: false,
    autoIncrement: false,
    tableName: "report_elements", // specify the table name explicitly
  }
);

module.exports = Report_elements;
