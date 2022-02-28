const user = require("../model/user");
const bcrypt = require("bcrypt");

module.exports.userRegistration = async (req, res) => {
  const data = req.body;
  const userData = user({
    username: data.username,
    email: data.email,
    password: data.password,
  });
  const encryptedPwd = await bcrypt.hash(data.password, 10);
  userData.password = encryptedPwd;
  await userData.save();
  res.json(userData);
};

module.exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  let userExists = await user.findOne({
    email,
  });
  const validPwd = await bcrypt.compare(password, userExists.password);
  if (validPwd) {
    return res.json({ status: true });
  }
};
