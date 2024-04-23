const { Model } = require("sequelize");
const Images = require("../../models/Images.model");

async function deleteImagesById(imageIds) {
  try {
    const result = await Images.destroy({
      where: { image_id: imageIds },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the image");
  }
}

module.exports = { deleteImagesById };
