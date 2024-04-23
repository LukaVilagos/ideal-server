const Reports = require("../../models/Reports.model");

async function postReport(reportData) {
  try {
    const newReportData = await Reports.create({
      report_name: reportData.report_name,
      report_template_id: reportData.report_template_id,
      employee_id: reportData.employee_id,
      company_id: reportData.company_id,
    });
    return newReportData;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create report");
  }
}

module.exports = postReport;
