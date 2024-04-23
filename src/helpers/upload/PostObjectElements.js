const Object_elements = require("../../models/Object_elements.model");

async function postObjectElement(objectElementData) {
  try {
    const newObjectElement = await Object_elements.create({
      object_id: objectElementData.object_id,
      object_template_element_id: objectElementData.object_template_element_id,
      object_element_value: objectElementData.object_element_value,
    });
    return newObjectElement;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create object element");
  }
}

module.exports = postObjectElement;
