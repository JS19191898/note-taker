const path = require('path'); 
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//ALL other routes respond with teh index.html file
router.get('*', (req, res) => {
    res.json('post!');
});

module.exports = router;