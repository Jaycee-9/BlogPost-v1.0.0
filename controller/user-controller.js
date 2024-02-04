import User from "../model/user.js";
import Token from "../model/token.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUpUser = async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = {
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
    };

    const newUser = new User(user);
    await newUser.save();

    return res.status(200).json({ msg: "Signup successfull" });
  } catch (error) {
    return res.status(500).json({ msg: "Error while signing up user" });
  }
};

export const userLogin = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).json({ msg: "username does not match" });
  }
  try {
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const accessToken = jwt.sign(user.toJSON(), process.env.jwtPrivateKey, {
        expiresIn: "15m",
      });
      const refreshToken = jwt.sign(user.toJSON(), process.env.jwtRefreshKey);

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        name: user.name,
        username: user.username,
      });
    } else {
      res.status(400).json({ msg: "password does not match" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error while login in user" });
  }
};
