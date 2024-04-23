const Signatures = require("../../models/Signatures.model");

async function postSignature(signatureData) {
  try {
    const newSignature = await Signatures.create({
      user_id: signatureData.user_id,
    });
    return newSignature;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create signature");
  }
}

module.exports = postSignature;
