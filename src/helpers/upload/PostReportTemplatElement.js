const Report_template_elements = require("../../models/Report_template_elements.model");

async function postReportTemplateElement(
  reportTemplateElementData,
  report_template_id
) {
  console.log(reportTemplateElementData);
  try {
    const newReportTemplateElement = await Report_template_elements.create({
      report_template_id: report_template_id,
      report_template_element_name:
        reportTemplateElementData.report_template_element_name,
      report_template_element_type:
        reportTemplateElementData.report_template_element_type,
      report_template_element_options:
        reportTemplateElementData.report_template_element_options,
      report_template_element_image_count:
        reportTemplateElementData.report_template_element_image_count,
      report_template_element_images_column_count:
        reportTemplateElementData.report_template_element_images_column_count,
      object_template_id: reportTemplateElementData.object_template_id,
      report_template_element_signature_text:
        reportTemplateElementData.report_template_element_signature_text,
      report_template_element_signature_position:
        reportTemplateElementData.report_template_element_signature_position,
      report_template_element_length:
        reportTemplateElementData.report_template_element_length,
      report_template_element_orientation:
        reportTemplateElementData.report_template_element_orientation,
      report_template_element_break_count:
        reportTemplateElementData.report_template_element_break_count,
    });
    return newReportTemplateElement;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create report template elements");
  }
}

module.exports = postReportTemplateElement;
