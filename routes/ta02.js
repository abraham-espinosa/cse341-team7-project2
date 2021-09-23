//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const userArray = ['jack', 'jill','brian'];

router.post('addUser', (req, res, next) => {
  const newUser = req.body.newUser;

  userArray.push(newUser);

  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

router.listen(3000);
console.log('Listening on 3000');

module.exports = router;
