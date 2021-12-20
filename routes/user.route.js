const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/user.controller');

userRouter.post("/register", userController.userRegister);
userRouter.post("/login", userController.userLogin)

module.exports = userRouter;