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

//posts Page
app.get( '/posts', posts.list);
//posts Creation Page
app.get('/posts/new', posts.form)

app.post('/posts', posts.create);

app.post('/posts/:id', posts.update);
app.get('/posts/:id', posts.show);
app.get('/posts/delete/:id', posts.remove);
// Connect to the MongoDB database
db.connect('mongodb://localhost:27017/test', function(){
  console.log("MongoDB Connected");
  app.listen(8080, function(){
    console.log("Express server started");
  });
});
