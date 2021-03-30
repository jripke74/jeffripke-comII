exports.getIndex = (req, res, next) => {
  res.render('general/index.ejs', {
    pageTitle: 'Jeff A. Ripke',
    path: '/home'
  });
}
