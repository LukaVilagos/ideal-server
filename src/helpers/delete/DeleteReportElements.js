const { Model } = require("sequelize");
const Report_elements = require("../../models/Report_elements.model");

async function deleteReportElementsById(reportElementIds) {
  try {
    const result = await Report_elements.destroy({
      where: { report_element_id: reportElementIds },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete report elements");
  }
}

module.exports = { deleteReportElementsById };
