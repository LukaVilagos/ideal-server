const Companies = require("../../models/Companies.model");

async function postCompany(companyData) {
  try {
    const newCompany = await Companies.create({
      company_name: companyData.company_name,
      company_location: companyData.company_location,
      company_phone_number: companyData.company_phone_number,
      company_description: companyData.company_description,
      company_email: companyData.company_email,
    });
    return newCompany;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create company");
  }
}

module.exports = postCompany;
