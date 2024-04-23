const { Model } = require("sequelize");
const Companies = require("../../models/Companies.model");

//just ask for body params and set that as companyId and all is well (in case you forget)
async function deleteCompaniesById(companyId) {
  try {
    const result = await Companies.destroy({
      where: { company_id: companyId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the company");
  }
}

module.exports = { deleteCompaniesById };
