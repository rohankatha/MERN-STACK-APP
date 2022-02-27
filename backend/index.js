
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
dotenv.config({ path: './config.env' });

app.use(cors());
app.use(bodyParser.json());
//require('./db/conn');
//app.use(require('./router/auth'));

//const userRoutes = express.Router();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
let Bbcdata = require('./models/product');
let Userdata = require('./models/user');
let Vendordata = require('./models/vendor');
let Orderdata = require('./models/order');
var UserRouter = require("./routes/Users");
var VendorRouter = require("./routes/Vendors");
var OrderRouter = require("./routes/Orders");
const dbrouter = express.Router();
app.use('/food', dbrouter);
app.use("/user", UserRouter);
app.use("/vendor", VendorRouter);
app.use("/order", OrderRouter);

dbrouter.route('/').get(function(req, res) {
  Bbcdata.find(function(err, food) {
      if (err) {
          console.log(err);
      } else {
          res.json(food);
      }
  });
});
dbrouter.route('/howle').get(function(req, res) {
  Userdata.find(function(err, food) {
      if (err) {
          console.log(err);
      } else {
          res.json(food);
      }
  });
});


dbrouter.route('/add').post(function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  let todo = new Bbcdata(req.body);
  todo.save()
      .then(todo => {
          res.status(200).json({'todo': 'todo added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new todo failed');
      });
});
dbrouter.route('/update').post(async function(req, res) {
  console.log('hello form backend')
  const result = await Bbcdata.updateOne( { "name": req.body.name}, // Filter,
  {$set: {"price":req.body.price}}, // Update
  {upsert: true}  );
  const result1 = await Bbcdata.updateOne( { "name": req.body.name}, // Filter,
  {$inc: {"count":1}}, // Update
  {upsert: true}  );
  console.log(result1)
 
});

dbrouter.route('/delete').post(async function(req, res) {
  console.log('hello from delete')
  const result = await Bbcdata.deleteOne( { "name": req.body.name}, // Filter
  {upsert: true}  );
  console.log(result)
 
  
});
dbrouter.route('/find').post(function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  let todo = new Bbcdata(req.body);
  todo.save()
      .then(todo => {
          res.status(200).json({'todo': 'todo added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new todo failed');
      });
});
/*var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
dbrouter.route('/update').updateOne(myquery, newvalues, function(err, res){
  if (err) throw err;
    console.log("1 document updated");
 
});*/

mongoose.connect('mongodb://127.0.0.1:27017/bbcapp', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})*
app.use(cors());



app.post("/home", (req, res) => {
 
  res.redirect("/register");
});
app.post("/home1", (req, res) => {
 
  res.redirect("/users");
});
app.post("/frtobe", (req, res) => {
  
  res.redirect("/home");
});
app.post("/frtobe1", (req, res) => {
  
  res.redirect("/vendors");
});
app.post("/myorders", (req, res) => {
  
  res.redirect("/myorders");
});
  



const PORT = process.env.PORT ||8080 ;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));