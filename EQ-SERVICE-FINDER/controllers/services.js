const services = [];


exports.getAddService = (req, res, next) => {
  res.render('add-service', {
    pageTitle: 'Add Service Request',
    path: '/admin/add-service'
  });
}

exports.postAddService = (req, res, next) => {
  services.push({ title: req.body.title });
  console.log('It worked ' + services[0] + ' redirecting to /');
  console.log(services);
  res.redirect('/');
}

exports.getServices = (req, res, next) => {
  res.render('serve', {
    serv: services,
    pageTitle: 'Services',
    path: '/serve',
    hasServices: services.length > 0//,
    //activeShop: true,
    //productCSS: true
  });
}
