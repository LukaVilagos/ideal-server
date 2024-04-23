const { Model } = require("sequelize");
const Roles = require("../../models/Roles.model");

async function deleteRolesById(roleIds) {
  try {
    const result = await Roles.destroy({ where: { roles_id: roleIds } });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete Roles");
  }
}

module.exports = { deleteRolesById };
