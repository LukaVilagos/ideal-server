const Object_elements = require("../../models/Object_elements.model");

async function updateObjectElementsById(ObjectElementsId, ObjectElementsData) {
  try {
    const result = await Object_elements.update(ObjectElementsData, {
      where: { object_element_id: ObjectElementsId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the object elements");
  }
}

module.exports = updateObjectElementsById;
