const News = require("../classes/News.js");
var express = require("express");
var router = express.Router();

router.get("/getnews", async function(req, res, next) {
  console.log("register hit!");
  //this will catch any errors that buttble up from the database if there isn an error.
  //if the romise is rejectes, it will be caught.
  try {
    var news = await News.getNews(1);
    res.send({
      data: news,
      success: true,
      code: 200,
      error: false
    });
  } catch (error) {
    res.send({
      success: true,
      message: "there was an error",
      error: "error",
      code: 200
    });
  }
});
router.post("post", async function(req, res, next) {
  var news = await News.getNews(1);
  try {
    var data = await news.create(req.data);
    res.send({
      data: data,
      success: true,
      message: "post successful",
      code: 200,
      error: false
    });
  } catch (error) {
    res.send({
      success: true,
      message: "there was an error",
      error: "error",
      code: 200
    });
  }
});
router.put("/update", async function(req, res, next) {
  var news = await News.getNews(1);
  try {
    await news.update({ news_name: "this is the new news_name" });
    res.send({
      data: null,
      success: true,
      message: "update successful",
      code: 200,
      error: false
    });
  } catch (error) {
    res.send({
      success: true,
      message: "there was an error",
      error: "error",
      code: 200
    });
  }
});

router.put("/delete", async function(req, res, next) {
  try {
    var news = await News.getNews(1);
    await news.delete();
    res.send({
      data: null,
      success: true,
      message: "deletion successful",
      code: 200,
      error: false
    });
  } catch (error) {
    res.send({
      success: true,
      message: "there was an error",
      error: "error",
      code: 200
    });
  }
});

exports.router = router;
