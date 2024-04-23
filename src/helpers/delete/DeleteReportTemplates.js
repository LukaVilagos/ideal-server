const { Model } = require("sequelize");
const Report_templates = require("../../models/Report_templates.model");
const Reports = require("../../models/Reports.model");
const Report_elements = require("../../models/Report_elements.model");
const Report_template_elements = require("../../models/Report_template_elements.model");

async function deleteReportTemplatesById(reportTemplateIds) {
  try {
    const destroyedReportIds = await Reports.findAll({
      attributes: ["report_id"],
      where: { report_template_id: reportTemplateIds },
    });
    const reportIds = destroyedReportIds.map((report) => report.report_id);
    await Report_elements.destroy({
      where: { report_id: reportIds },
    });
    await Reports.destroy({
      where: { report_template_id: reportTemplateIds },
    });
    await Report_template_elements.destroy({
      where: { report_template_id: reportTemplateIds },
    });
    await Report_templates.destroy({
      where: { report_template_id: reportTemplateIds },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete report templates");
  }
}

module.exports = { deleteReportTemplatesById };
