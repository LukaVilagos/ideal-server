const Objects = require("../../models/Objects.model");

async function updateObjectById(ObjectId, ObjectData) {
  try {
    const result = await Objects.update(ObjectData, {
      where: { object_id: ObjectId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the objects");
  }
}

module.exports = updateObjectById;
