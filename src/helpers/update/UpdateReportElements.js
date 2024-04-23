const Report_elements = require("../../models/Report_elements.model");

async function updateReportElementsById(ReportElementsId, ReportElementsData) {
  try {
    const result = await Report_elements.update(ReportElementsData, {
      where: { report_element_id: ReportElementsId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the report elements");
  }
}

module.exports = updateReportElementsById;
