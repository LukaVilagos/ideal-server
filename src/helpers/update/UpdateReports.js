const Reports = require("../../models/Reports.model");

async function updateReportById(ReportId, ReportData) {
  try {
    const result = await Reports.update(ReportData, {
      where: { report_id: ReportId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the report ");
  }
}

module.exports = updateReportById;
