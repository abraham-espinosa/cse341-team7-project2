/*
//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const userArray = ['Erik', 'Sam','Abraham'];

router.post('addUser', (req, res, next) => {
  const newUser = req.body.newUser;

  userArray.push(newUser);

  res.redirect('/ta02/');
});

// For requirement 03 of TA02
router.post('/removeUser', (req, res, next) => {
  const remUser = req.body.remUser;

  // Splice method removes from a const array
  const index = userArray.indexOf(remUser);
  if (index !== -1) {
    userArray.splice(index, 1);
  }

  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

//router.listen(3000);
//console.log('Listening on 3000');

module.exports = router;
*/
// TA02 Solution
// This is the solution for the routing side of TA02
const express = require('express');
const router = express.Router();

// For requirement 01 of TA02
const userArray = ['Erik Alcala', 'Sam', 'Abraham'];

// For requirement 02 of TA02
router.post('/addUser', (req, res, next) => {
  const newUser = req.body.newUser;

  userArray.push(newUser);

  res.redirect('/ta02/');
});

// For requirement 03 of TA02
router.post('/removeUser', (req, res, next) => {
  const remUser = req.body.remUser;

  // Splice method removes from a const array
  const index = userArray.indexOf(remUser);
  if (index !== -1) {
    userArray.splice(index, 1);
  }

  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;