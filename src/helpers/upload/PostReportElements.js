const Report_elements = require("../../models/Report_elements.model");

async function postReportElements(reportElementsData, report_id) {
  try {
    const newReportElementData = await Report_elements.bulkCreate(
      reportElementsData.map((elementData) => ({
        report_id: report_id,
        report_template_element_id: elementData.report_template_element_id,
        report_element_value: elementData.report_element_value,
      }))
    );
    return newReportElementData;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create report element");
  }
}

module.exports = postReportElements;
