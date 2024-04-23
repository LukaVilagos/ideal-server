const Employees = require("../../models/Employees.model");

async function updateEmployeeById(EmployeeId, EmployeeData) {
  try {
    const result = await Employees.update(EmployeeData, {
      where: { employee_id: EmployeeId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the Employee");
  }
}

module.exports = updateEmployeeById;
