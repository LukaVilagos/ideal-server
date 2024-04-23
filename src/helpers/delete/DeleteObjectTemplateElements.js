const { Model } = require("sequelize");
const Object_template_elements = require("../../models/Objects_template_elements.model");

async function deleteObjectTemplateElementsById(objectTemplateElementIds) {
  try {
    const result = await Object_template_elements.destroy({
      where: { object_template_element_id: objectTemplateElementIds },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the Object_template_elements");
  }
}

module.exports = { deleteObjectTemplateElementsById };
