var express = require('express');
var router = express.Router();
var Request = require("request"); // custom added.
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {

  Request.get("https://jsonplaceholder.typicode.com/posts", (error, response, body) => {
    if(error)
    {
      return console.dir(error);
    }
    res.render("index", {
          data: body,
          title: 'Blog'
    });
  });

});

router.get('/about', function(req, res) {

  res.render('about', {
    title: 'about'
  });

});

router.get('/contact', function(req, res) {
    res.render('contact', {
      title: 'contact'
    });

});

// Request.get("https://jsonplaceholder.typicode.com/posts", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     console.dir(JSON.parse(body));
// });

// app.get("https://jsonplaceholder.typicode.com/posts", (req, res) => {
//     console.dir(JSON.parse(res));
// });

module.exports = router;
