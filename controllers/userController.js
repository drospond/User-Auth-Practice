
const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
    const email = req.body.email.trim();
    const password = req.body.email.trim();
    const username = req.body.username.trim();

    db.User.create(req.body).then(() => res.json({ succes: true })).catch(er => { console.log(er) })
})

module.exports = router;