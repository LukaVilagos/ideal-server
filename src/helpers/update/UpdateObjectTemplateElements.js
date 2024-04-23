const Object_template_elements = require("../../models/Objects_template_elements.model");

async function updateObjectTemplateElementById(
  ObjectTemplateElementId,
  ObjectTemplateElementData
) {
  try {
    const result = await Object_template_elements.update(
      ObjectTemplateElementData,
      {
        where: { object_template_element_id: ObjectTemplateElementId },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the objects template elements");
  }
}

module.exports = updateObjectTemplateElementById;
