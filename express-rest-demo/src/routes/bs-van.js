const express = require('express'),
router = express.Router();

router.get('/students', (req, res) => {
    res.send("Students in Vancouver");
})

module.exports = router;