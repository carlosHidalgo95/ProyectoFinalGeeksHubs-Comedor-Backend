const jsonwebtoken = require("jsonwebtoken");
const models = require("../models/index.js");
const {findUser} = require("../services/user.services")

const {
  assertValidPasswordService,
  assertEmailIsUniqueService,
  createUserService,
  encryptPassword,
} = require("../services/auth.services.js");

async function authLoginController(req, res) {
  const { email, password } = req.body;
  const userFound = await findUser(email);
  if (!userFound) {
    res.status(401).json({ message: "Password or email is incorrect" });
    return;
  }
  const hashedPassword = encryptPassword(password);
  if (hashedPassword !== userFound.password) {
    console.log(email,password);
    res.status(401).json({ message: "Password or email is incorrect" });
    return;
  }

  const secret = process.env.JWT_SECRET || '';

/* Creating a JWT token. */
  const jwt = jsonwebtoken.sign({
    id: userFound.id,
    email: userFound.email,
    username:userFound.username,
    created: Date.now(),
    role: userFound.id_role
  }, secret);

  let isAdmin=false;
  if (userFound.id_role==1) {
    isAdmin=true;
  }

  res.status(200).json({
    message: "Login successful",
    jwt: jwt,
    username:userFound.username,
    admin:isAdmin
  });
  
}
async function authRegisterController(req, res) {
    const body = req.body;
    // validate email is unique
    try {
      await assertEmailIsUniqueService(body.email);
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "email is already registered: " + error.message,
      });
      return;
    }
    // save user
    try {
      const userCreated = await createUserService(body);
      res.status(201).json(userCreated);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
  
module.exports = {
  authLoginController,
  authRegisterController,
};
