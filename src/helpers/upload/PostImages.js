const Images = require("../../models/Images.model");

async function postImage(imageData) {
  try {
    const newImage = await Images.create({
      image_id: imageData.image_id,
      company_id: imageData.company_id,
    });
    return newImage;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create image");
  }
}

module.exports = postImage;
