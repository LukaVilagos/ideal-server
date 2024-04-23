const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");
const Companies = require("./Companies.model");
const Employees = require("./Employees.model");

const Report_templates = sequelize.define(
  "Report_Templates",
  {
    report_template_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    report_template_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
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
    tableName: "report_templates", // specify the table name explicitly
  }
);

module.exports = Report_templates;
