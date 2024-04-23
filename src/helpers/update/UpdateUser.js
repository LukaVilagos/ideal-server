const Users = require("../../models/Users.model");

async function updateUserById(UserId, UserData) {
  try {
    const result = await Users.update(UserData, {
      where: { user_id: UserId },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the user ");
  }
}

module.exports = updateUserById;
