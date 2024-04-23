const { Model } = require("sequelize");
const Objects = require("../../models/Objects.model");

async function deleteObjectsById(objectIds) {
  try {
    const result = await Objects.destroy({
      where: { object_id: objectIds },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the Objects");
  }
}

module.exports = { deleteObjectsById };
