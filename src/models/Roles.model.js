const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");
const Companies = require("./Companies.model");

const Roles = sequelize.define(
  "Roles",
  {
    role_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    role_name: { type: DataTypes.STRING, allowNull: false },
    can_view: { type: DataTypes.BOOLEAN, defaultValue: true },
    can_edit: { type: DataTypes.BOOLEAN, defaultValue: false },
    can_delete: { type: DataTypes.BOOLEAN, defaultValue: false },
    can_download: { type: DataTypes.BOOLEAN, defaultValue: false },
    can_create_template: { type: DataTypes.BOOLEAN, defaultValue: false },
    can_create_roles: { type: DataTypes.BOOLEAN, defaultValue: false },
    can_manage_company: { type: DataTypes.BOOLEAN, defaultValue: false },
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
    tableName: "roles",
    autoIncrement: false,
  }
);

module.exports = Roles;
