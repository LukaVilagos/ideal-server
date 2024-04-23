const Object_templates = require("../../models/Object_templates.model");

async function postObjectTemplate(objectTemplateData) {
  try {
    const newObjectTemplate = await Object_templates.create({
      object_template_name: objectTemplateData.object_template_name,
      company_id: objectTemplateData.company_id,
      employee_id: objectTemplateData.employee_id,
    });
    return newObjectTemplate;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create object");
  }
}

module.exports = postObjectTemplate;
