const { Model } = require("sequelize");
const Object_templates = require("../../models/Object_templates.model");

async function deleteObjectTemplatesById(objectTemplateIds) {
  try {
    const result = await Object_templates.destroy({
      where: { object_template_id: objectTemplateIds },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the Object_template");
  }
}

module.exports = { deleteObjectTemplatesById };
