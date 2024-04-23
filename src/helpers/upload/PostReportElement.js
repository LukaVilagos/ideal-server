const Report_elements = require("../../models/Report_elements.model");

async function postReportElement(reportElementData) {
  try {
    const newReportElementData = await Report_elements.create({
      report_id: reportElementData.report_id,
      report_template_element_id: reportElementData.report_template_element_id,
      report_element_value: reportElementData.report_element_value,
    });
    return newReportElementData;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create report element");
  }
}

module.exports = postReportElement;
