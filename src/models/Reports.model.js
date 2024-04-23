const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");
const Report_templates = require("./Report_templates.model");
const Employees = require("./Employees.model");
const Companies = require("./Companies.model");

const Reports = sequelize.define(
  "Reports",
  {
    report_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    report_name: {
      type: DataTypes.STRING,
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
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    last_edited: {
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
    company_id: {
      type: DataTypes.UUID,
      references: {
        model: Companies,
        key: "company_id",
        onDelete: "CASCADE",
      },
      allowNull: false,
    },
  },
  {
    timestamps: false,
    autoIncrement: false,
    tableName: "reports", // specify the table name explicitly
  }
);

module.exports = Reports;
