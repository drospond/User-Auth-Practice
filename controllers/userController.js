const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  const email = req.body.email.trim();
  const password = req.body.email.trim();
  const username = req.body.username.trim();

  db.User.create(req.body)
    .then(() => res.json({ succes: true }))
    .catch((er) => {
      console.log(er);
      res.status(500).json({succes:false});
    });
});

router.post("/signin", (req, res) => {
  const email = req.body.email.trim();
  const password = req.body.password;

  db.User.findOne({
    where: {
      email: email
    }
  }).then((user)=>{
    if(!user){
      return res.status(500).json({succes: false});
    }
    if(user.password === password){
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
