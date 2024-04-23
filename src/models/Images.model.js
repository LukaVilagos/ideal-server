const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");
const Companies = require("./Companies.model");

const Images = sequelize.define(
  "Images",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    image_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
    tableName: "images", // specify the table name explicitly
  }
);

module.exports = Images;
