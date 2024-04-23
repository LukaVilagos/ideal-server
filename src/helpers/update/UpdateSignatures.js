const Signatures = require("../../models/Signatures.model");

async function updateSignatureById(SignatureId, SignatureData) {
  try {
    const result = await Signatures.update(SignatureData, {
      where: { signature_id: SignatureId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the signature ");
  }
}

module.exports = updateSignatureById;
