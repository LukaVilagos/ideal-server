const { Model } = require("sequelize");
const Report_template_elements = require("../../models/Report_template_elements.model");

async function deleteReportTemplateElementsById(reportTemplateElementIds) {
  try {
    const result = await Report_template_elements.destroy({
      where: { report_template_element_id: reportTemplateElementIds },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete report templates elements");
  }
}

module.exports = { deleteReportTemplateElementsById };
