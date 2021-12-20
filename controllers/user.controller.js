const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = require('../models/user.models');

class userController {

  static Register = async (req, res, next) => {
    const { name } = req.body;
    const { email } = req.body;
    const { username } = req.body;
    const { password } = req.body;
    const { confirmPassword } = req.body;


    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(password, salt);

    try {
      const result = await userSchema.create(
        {
          username: username,
          email: email,
          password: hashedPass
        }
      );
      res.status(200).json({ Message: "Register Succesfull!" });
    } catch (error) {
        next(error);
    }
  };

  static Login = async (req, res, next) => {
    const { username } = req.body;
    const { password } = req.body;
    const { remember } = req.body;

    try {
      const result = await userSchema.findOne({ username: username });
      if (!result) {
        throw { name: "UNAUTHORIZED_EMAIL" };
      }
      const passValidation = bcrypt.compareSync(password, result.password);
      if (!passValidation) {
        throw { name: "UNAUTHORIZED_PASSWORD" };
      }
      const token = jwt.sign(
        {
          id: result.id,
          username: result.username
        },
        "secretpass"
      );
      res.status(200).json({
        Message: "Succes To Log In!",
        Acces_Token: token,
      });
    } catch (error) {
        next(error);
    }
  };



}

module.exports = userController;