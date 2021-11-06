const path = require('path');

const express = require('express');

const servicesController = require('../controllers/services');
const talentsController = require('../controllers/talents');

const router = express.Router();

// /admin/serve => GET
router.get('/serve', (req, res, next) => {
  res.render('serve', {
    pageTitle: 'Services',
    path: '/admin/serve'
  });
});

// /admin/add-service => GET
router.get('/add-service', servicesController.getAddService);

// /admin/add-service => POST
router.post('/add-service', servicesController.postAddService);

// /admin/talents => GET
router.get('/talents', (req, res, next) => {
  res.render('talents', {
    pageTitle: 'Talents',
    path: '/admin/talents'
  });
});


// /admin/add-talent => GET
router.get('/add-talent', talentsController.getAddTalent);
// /admin/add-talent => POST
router.post('/add-talent', talentsController.postAddTalent);

module.exports = router;
