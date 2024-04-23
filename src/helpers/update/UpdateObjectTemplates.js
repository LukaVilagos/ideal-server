const Object_template = require("../../models/Object_templates.model");

async function updateObjectTemplateById(ObjectTemplateId, ObjectTemplateData) {
  try {
    const result = await Object_template.update(ObjectTemplateData, {
      where: { object_template__id: ObjectTemplateId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the objects template");
  }
}

module.exports = updateObjectTemplateById;
