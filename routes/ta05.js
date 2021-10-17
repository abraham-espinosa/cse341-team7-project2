//TA05 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('pages/ta05', {
    title: 'Team Activity 05',
    path: '/ta05', // For pug, EJS
    activeTA04: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;






/**********************************
 * Team Activity 05 route handling
 **********************************/
/*
const express = require('express');
 const router = express.Router();
 
 const ta05Controller = require('../controllers/ta05');
 
 // You can use GET with dynamic routes as well,
 // but POST is typically used to modify properties on the server
 router.post('/create-cookie', ta05Controller.postCreateCookie);
 
 router.post('/change-style', ta05Controller.postStyle);
 
 router.post('/counter', ta05Controller.postCounter);
 
 router.post('/reset', ta05Controller.resetSession);
 
 router.get('/', ta05Controller.getIndex);
 
 module.exports = router;
*/