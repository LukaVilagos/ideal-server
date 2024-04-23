const { Model } = require("sequelize");
const Object_elements = require("../../models/Object_elements.model");

async function deleteObjectElementsById(objectElementIds) {
  try {
    const result = await Object_elements.destroy({
      where: { object_element_id: objectElementIds },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the ObjectElements");
  }
}

module.exports = { deleteObjectElementsById };
