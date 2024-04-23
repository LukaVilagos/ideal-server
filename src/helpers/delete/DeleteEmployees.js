const { Model } = require("sequelize");
const Employees = require("../../models/Employees.model");

async function deleteEmployeesById(employeeIds) {
  try {
    const result = await Employees.destroy({
      where: { employee_id: employeeIds },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the employee");
  }
}

module.exports = { deleteEmployeesById };
