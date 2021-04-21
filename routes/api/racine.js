const express = require("express");



const router = express.Router();

router.get("/", async (req, res) => { /*need TOKEN*/
    console.log("racine")
    res.status(200).json("Hello API :)");


});



module.exports = router;