//Project2 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('../../EQ-SERVICE-FINDER/views/home', {
    title: 'Project 2'
  });
});

module.exports = router;


