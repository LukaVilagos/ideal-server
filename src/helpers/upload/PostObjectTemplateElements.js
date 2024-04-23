const Object_template_elements = require("../../models/Objects_template_elements.model");

async function postObjectTemplateElement(objectTemplateElementData) {
  try {
    const newObjectTemplateElement = await Object_template_elements.create({
      object_template_id: objectTemplateElementData.object_template_id,
      object_template_element_name:
        objectTemplateElementData.object_template_element_name,
      object_template_element_type:
        objectTemplateElementData.object_template_element_type,
      object_template_element_options:
        objectTemplateElementData.object_template_element_options,
      object_template_element_image_count:
        objectTemplateElementData.object_template_element_image_count,
      object_template_element_images_column_count:
        objectTemplateElementData.object_template_element_image_column_count,
      object_templatet_element_length:
        objectTemplateElementData.object_template_element_length,
      object_template_element_orientation:
        objectTemplateElementData.object_template_element_orientation,
      object_template_element_break_count:
        objectTemplateElementData.object_template_element_break_count,
    });
    return newObjectTemplateElement;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create object template element");
  }
}

module.exports = postObjectTemplateElement;
