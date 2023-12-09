const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users.js");

router.post("/login", userController.login);

module.exports = router;

// const getUserToken = async(userInfo) =>{
//     //console.log(JSON.stringify(userInfo));
//     const response = await fetch(URL_USERSLOGIN, {
//         method: 'POST',
//         headers: { 'Content-type' : 'application/json;charset=UTF-8'},
//         body: JSON.stringify(userInfo),
//     })};
