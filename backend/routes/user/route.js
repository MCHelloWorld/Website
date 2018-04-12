router.use('/user/post', function(req,res,next){
  res.redirect("routes/user/post");
});
router.use('/user/put', function(req,res,next){
  res.redirect("routes/user/put");
});
router.use('/user/get', function(req,res,next){
  res.redirect("routes/user/get");
});
