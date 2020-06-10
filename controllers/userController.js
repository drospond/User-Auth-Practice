require('dotenv').config();
const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if(token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.REACT_APP_SECRET_KEY, (err, user) => {
    if(err) return res.sendStatus(403);
    req.user = user;
    next();
  })
}

router.get("/", authenticateToken, (req, res) => {
  db.User.findOne({
    where: {
      id: req.user.id
    },
    attributes: ["id", "username", "email"]
  }).then(user=>{
    res.json(user);
  })
})

router.post("/", async (req, res) => {
  try{
    const email = req.body.email.trim();
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const username = req.body.username.trim();

    db.User.create({email, password: hashedPassword, username})
      .then(() => res.status(201).json({ succes: true }))
      .catch((er) => {
        console.log(er);
        res.status(500).json({succes:false});
      });
  } catch{
    res.status(500).send();
  }
});

router.post("/signin", (req, res) => {
  const email = req.body.email.trim();
  const password = req.body.password;

  db.User.findOne({
    where: {
      email: email
    }
  }).then(async (user)=>{
    if(!user){
      return res.status(500).json({succes: false});
    }
    if( await bcrypt.compare(password, user.password)){
      const userJWT = {id: user.id, username: user.username};
      const accessToken = jwt.sign(userJWT, process.env.REACT_APP_SECRET_KEY, {expiresIn: '1h'});
      res.json({accessToken: accessToken, succes: true});
    }else{
      res.json({succes:false});
    }
  }).catch(er=>{
    console.log(er);
    res.status(500).json({succes: false});
  })
})

module.exports = router;
