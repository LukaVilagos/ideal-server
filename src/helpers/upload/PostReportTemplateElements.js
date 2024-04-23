const Report_template_elements = require("../../models/Report_template_elements.model");

async function postReportTemplateElements(
  reportTemplateElementData,
  report_template_id
) {
  try {
    const newReportTemplateElement = await Report_template_elements.bulkCreate(
      reportTemplateElementData.formElements.map((elementData) => ({
        report_template_id: report_template_id,
        report_template_element_name: elementData.report_template_element_name,
        report_template_element_type: elementData.report_template_element_type,
        report_template_element_options:
          elementData.report_template_element_options,
        report_template_element_image_count:
          elementData.report_template_element_image_count,
        report_template_element_images_column_count:
          elementData.report_template_element_images_column_count,
        object_template_id: elementData.object_template_id,
        report_template_element_signature_text:
          elementData.report_template_element_signature_text,
        report_template_element_signature_position:
          elementData.report_template_element_signature_position,
        report_template_element_length:
          elementData.report_template_element_length,
        report_template_element_orientation:
          elementData.report_template_element_orientation,
        report_template_element_break_count:
          elementData.report_template_element_break_count,
      }))
    );
    return newReportTemplateElement;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create report template elements");
  }
}

module.exports = postReportTemplateElements;
