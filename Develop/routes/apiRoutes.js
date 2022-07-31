const router = require('express').Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");


router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));

});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4()
    console.log("post notes hit")

    fs.readFile(path.join(__dirname, "../db/db.json"), 'utf-8', function(err, data){
      
        console.log(data)
        const parsedNotes = JSON.parse(data)
     
        parsedNotes.push(newNote);
        console.log("parsedData", parsedNotes);

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(parsedNotes), function(err){
            if (err) throw err;
            console.log("note saved to DB successfully!")

            // ternary operator if statement
           // err ? console.log(err) : console.log("note saved successfully!")

        })
        res.sendFile(path.join(__dirname, "../db/db.json"));

    })


});

router.delete('/notes/:id', (req, res) => {
   
});

module.exports = router;