const Reports_template_elements = require("../../models/Report_template_elements.model");

async function updateReportTemplateElementById(
  ReportTemplateElementId,
  ReportTemplateElementData
) {
  try {
    const result = await Reports_template_elements.update(
      ReportTemplateElementData,
      {
        where: { report_template_element_id: ReportTemplateElementId },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the report template element");
  }
}

module.exports = updateReportTemplateElementById;
