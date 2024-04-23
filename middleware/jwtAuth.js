const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("./jwtGenerator");
const autorization = require("./authorization");
const User = require("../src/models/Users.model");
const Employees = require("../src/models/Employees.model");
const Companies = require("../src/models/Companies.model");
const Roles = require("../src/models/Roles.model");

router.get("/activeUser", autorization, async (req, res) => {
  try {
    const user_id = req.user;

    const user = await User.findOne({
      where: {
        user_id: user_id,
      },
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(404).send("Can not find user with that id");
    return;
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user === null) {
      return res.status(401).json("Password or Username is incorrect");
    }
    const validPassword = await bcrypt.compare(password, user.password);

    console.log(validPassword);

    if (!validPassword) {
      res.status(401).json("Password or Username is incorrect");
    }

    const token = jwtGenerator(user.user_id);

    return res.json(token);
  } catch (error) {
    console.error(error);
    res.status(404).send("Server Error, login didn't work");
  }
});

router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const user = await User.findOne({
      where: { email: email },
    });

    if (user === null) {
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const bcryptPassword = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        last_name: last_name,
        first_name: first_name,
        email: email,
        password: bcryptPassword,
      });

      console.log(newUser);
      //temporary solution

      const company = await Companies.findOne();
      const role = await Roles.findOne();

      const newEmployee = await Employees.create({
        user_id: newUser.user_id,
        company_id: company.company_id,
        role_id: role.role_id,
      });
      const token = jwtGenerator(newUser.user_id);

      return res.json(token);
    } else {
      res.status(401).json("User already exists");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error, register failed");
    return;
  }
});

module.exports = router;
