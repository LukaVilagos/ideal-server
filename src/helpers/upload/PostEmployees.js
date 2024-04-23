const Employees = require("../../models/Employees.model");

async function postEmployee(employeeData) {
  try {
    const newEmployee = await Employees.create({
      user_id: employeeData.user_id,
      company_id: employeeData.company_id,
      role_id: employeeData.role_id,
    });
    return newEmployee;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create employee");
  }
}

module.exports = postEmployee;
