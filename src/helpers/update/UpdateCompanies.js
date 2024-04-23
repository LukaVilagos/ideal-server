const Companies = require("../../models/Companies.model");

async function updateCompanyById(companyId, companyData) {
  try {
    const result = await Companies.update(companyData, {
      where: { company_id: companyId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the company");
  }
}

module.exports = updateCompanyById;
