const Objects = require("../../models/Objects.model");

async function postObject(objectData) {
  try {
    const newObject = await Objects.create({
      object_name: objectData.object_name,
      object_template_id: objectData.object_template_id,
      employee_id: objectData.employee_id,
    });
    return newObject;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create object");
  }
}

module.exports = postObject;
