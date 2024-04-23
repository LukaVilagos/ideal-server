const Images = require("../../models/Images.model");

async function updateImagesById(ImagesId, ImagesData) {
  try {
    const result = await Images.update(ImagesData, {
      where: { image_id: ImagesId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the image");
  }
}

module.exports = updateImagesById;
