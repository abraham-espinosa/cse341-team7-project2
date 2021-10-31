const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/serve => GET
router.get('/serve', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'serve.html'));
});

// /admin/talents => GET
router.get('/talents', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'talents.html'));
});

// /admin/serve => POST
router.post('/serve', (req, res, next) => {
  console.log(req.body);
  res.redirect('/admin/serve');
});

// /admin/talents => POST
router.post('/talents', (req, res, next) => {
  console.log(req.body);
  res.redirect('/admin/talents');
});

module.exports = router;
