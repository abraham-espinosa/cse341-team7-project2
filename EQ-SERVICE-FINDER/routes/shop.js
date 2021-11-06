const path = require('path');

const express = require('express');
const app = express();


const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('home', {
    pageTitle: 'EQ Service Finder Home',
    path: '/'
  });
});

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found'});
});

module.exports = router;
