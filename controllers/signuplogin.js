const bcrypt = require("bcrypt");
const User = require("../models/user");


exports.postsignup = async(req, res) => {
  const { name, email, phonenumber, pwd } = req.body;

  const password = await bcrypt.hash(pwd, 10);

  User.create({
    name,
    email,
    phonenumber,
    password,
  })
    .then((result) => {
      res.json({ result, suc: true });
    })
    .catch((err) => {
      res.json(err);
    });
};