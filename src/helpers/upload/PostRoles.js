const Roles = require("../../models/Roles.model");

async function postRole(roleData) {
  try {
    const newRole = await Roles.create({
      role_name: roleData.role_name,
      can_view: roleData.can_view,
      can_edit: roleData.can_edit,
      can_delete: roleData.can_delete,
      can_download: roleData.can_download,
      can_create_template: roleData.can_create_template,
      can_create_roles: roleData.can_create_roles,
      can_manage_company: roleData.can_manage_company,
      company_id: roleData.company_id,
    });
    return newRole;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create role");
  }
}

module.exports = postRole;
