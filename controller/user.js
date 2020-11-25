import bcrypt from "bcrypt";
import _ from "lodash";

import User from "../model/user.js";
import {
  validateUserLogin,
  validateUserRegistration,
} from "../validation/user.js";

export const registration = async (req, res) => {
  try {
    const { error } = validateUserRegistration(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const userIsExist = await User.findOne({ email: req.body.email });
    if (userIsExist) return res.status(400).send("User is already exists");

    const user = new User(_.pick(req.body, ["name", "email", "password"]));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    await user.save();

    const token = user.generateJsonWebToken();
    res.header("x-auth-token", token).send(_.pick(user, ["_id", "name"]));
  } catch (err) {
    for (let field in err.errors) {
      return res.send(err.errors[field].message);
    }
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = validateUserLogin(req.body);
    if (error) return res.status(200).send(error.details[0].message);

    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).send("invalid username or password");

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).send("invalid username or password");

    const token = user.generateJsonWebToken();
    res.status(200).send(token);
  } catch (err) {
    for (let field in err.errors) {
      return res.send(err.errors[field].message);
    }
  }
};
