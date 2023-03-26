const express = require("express");

const { createUser } = require("../controller/userCtrl");
const router = express.Router();


router.post("/signUp", createUser);

module.exports = {router};