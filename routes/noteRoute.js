const express = require("express")
const router = express.Router();
const Note = require("../models/noteModel");

router.route("/create").post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const phone = req.body.phone;
    const address = req.body.address
    const newNote = new Note({
        title,
        content,
        phone,
        address
    });

    newNote.save();
})

router.route("/notes").get((req,res) => {
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})

module.exports = router;