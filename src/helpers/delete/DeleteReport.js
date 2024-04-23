const { Model } = require("sequelize");
const Reports = require("../../models/Reports.model");
const Report_elements = require("../../models/Report_elements.model");

async function deleteReportById(reportIds) {
  try {
    await Report_elements.destroy({ where: { report_id: reportIds } });
    const result = await Reports.destroy({ where: { report_id: reportIds } });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete reports");
  }
}

module.exports = { deleteReportById };
