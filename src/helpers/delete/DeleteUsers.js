const { Model } = require("sequelize");
const User = require("../../models/Users.model");

async function deleteUserById(userId) {
  try {
    const result = await User.destroy({
      where: { user_id: userId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }
}

module.exports = { deleteUserById };
