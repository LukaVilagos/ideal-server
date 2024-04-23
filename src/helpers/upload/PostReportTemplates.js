const Report_templates = require("../../models/Report_templates.model");

async function postReportTemplate(reportTemplateData) {
  try {
    const newReportTemplate = await Report_templates.create({
      report_template_name: reportTemplateData.report_template_name,
      company_id: reportTemplateData.company_id,
      employee_id: reportTemplateData.employee_id,
    });
    return newReportTemplate;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create report template");
  }
}

module.exports = postReportTemplate;
