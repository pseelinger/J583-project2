// Set up the express server for ejs
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require('./config/db');
var posts = require('./controllers/posts')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
//Actual Site
app.get('/', function(req, res){
  res.render('index', posts.list)
});
//Posts Page
app.get( '/posts', posts.list);
//Post Creation Page
app.get('/post/new', posts.form)

app.post('/posts', posts.create);
// Connect to the MongoDB database
db.connect('mongodb://localhost:27017/test', function(){
  console.log("MongoDB Connected");
  app.listen(8080, function(){
    console.log("Express server started");
  });
});
