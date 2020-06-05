const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

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
      res.json({succes: true});
    }else{
      res.json({succes:false});
    }
  }).catch(er=>{
    console.log(er);
    res.status(500).json({succes: false});
  })
})

module.exports = router;
