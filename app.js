var express = require('express'),
  app = express(),
  path = require('path'),
  http = require('http'),
  data = require('./routes/data'),
  bodyParser = require('body-parser'),
  Client = require('xtuple-rest-client');

app.locals.title = "xTuple Rest Client Example";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('views', path.join( __dirname, "views"));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.get('/', data.getAll);
app.post('/add', data.addTodo);
app.post('/delete', data.deleteTodo);
app.get('/get', data.getTodo);
app.post('/update', data.updateTodo);

http.createServer(app).listen(app.get("port"), function () {
  console.log("xTuple REST Example is running at localhost:", app.get("port"));
});
