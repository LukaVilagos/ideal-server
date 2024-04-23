const { Model } = require("sequelize");
const Signatures = require("../../models/Signatures.model");

async function deleteSignatureById(signatureIds) {
  try {
    const result = await Signatures.destroy({
      where: { signatures_id: signatureIds },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete Signatures");
  }
}

module.exports = { deleteSignatureById };
