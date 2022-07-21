const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.json({msg: " man backenddanman"});
});


module.exports = router;
