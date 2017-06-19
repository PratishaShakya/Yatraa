var express = require('express');
var router = express.Router();

/* GET home page. */
var person = {name: 'Pratisha Shakya', 
age:20, course:'B.Sc.CSIT', 
semester:'Fourth', contact:9818222655,
 college:'Kathford International College',
  fblink:'https://www.facebook.com/pratisha.shakya.54'};
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', person });
});

router.get('/profile',function(req, res){
	res.render('profile',{person});
});

router.get('/add',function(req, res){
	res.render('add');
});
module.exports = router;

