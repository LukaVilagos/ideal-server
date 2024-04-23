const { Sequelize, DataTypes, fn } = require("sequelize");
const sequelize = require("./db");
//import validator from "validator";

const Companies = sequelize.define(
  "Companies",
  {
    company_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    company_name: { type: DataTypes.STRING, allowNull: false },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    company_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_creation: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    company_phone_number: { type: DataTypes.STRING, allowNull: true },
    company_code: {
      type: DataTypes.TEXT,
      unique: true,
      defaultValue: sequelize.literal(
        "substring(uuid_generate_v4()::text, 1, 12)"
      ),
    },
    company_password: {
      type: DataTypes.TEXT,
      unique: true,
      defaultValue: sequelize.literal(
        "substring(uuid_generate_v4()::text, 1, 8)"
      ),
    },
    company_description: { type: DataTypes.TEXT, allowNull: true },
    company_email: { type: DataTypes.STRING, unique: true, allowNull: true },
  },
  {
    modelName: "Companies",
    timestamps: false,
    tableName: "companies",
    autoIncrement: false,
  }
);

module.exports = Companies;
