const Reports_templates = require("../../models/Report_templates.model");

async function updateReportTemplateById(ReportTemplateId, ReportTemplateData) {
  try {
    const result = await Reports_templates.update(ReportTemplateData, {
      where: { report_template_id: ReportTemplateId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the report template");
  }
}

module.exports = updateReportTemplateById;
