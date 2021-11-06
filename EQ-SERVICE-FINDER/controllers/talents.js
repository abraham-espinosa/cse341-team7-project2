const talents = [];

exports.getAddTalent = (req, res, next) => {
  res.render('add-talent', {
    pageTitle: 'Add Talent',
    path: '/admin/add-talent'
  });
}

exports.postAddTalent = (req, res, next) => {
  talents.push({ title: req.body.title });
  console.log('It worked, added ' + talents[0] + ' redirecting to /');

  res.redirect('/');
}

exports.getTalents = (req, res, next) => {
  res.render('talents', {
    tale: talents,
    pageTitle: 'Talents',
    path: '/talents',
    hasTalents: talents.length > 0//,
    //activeShop: true,
    //productCSS: true
  });
}
