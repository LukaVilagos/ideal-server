const Roles = require("../../models/Roles.model");

async function updateRoleById(RolesId, RolesData) {
  try {
    const result = await Roles.update(RolesData, {
      where: { role_id: RolesId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the role");
  }
}

module.exports = updateRoleById;
