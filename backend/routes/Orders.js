var express = require("express");
var router = express.Router();
const app = express();
// Load Order model
const Order = require("../models/order");

// GET request 
// Getting all the users
router.get("/", function (req, res) {
    Order.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/register", (req, res) => {
    const newUser = new Order({
        name: req.body.name,
        vendor: req.body.vendor,
        time: req.body.time,
        cost: req.body.cost,
        quantity: req.body.quantity,
        rating: req.body.rating,
        status:req.body.status

        
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// POST request 
// Login

  router.post("/update1", async function (req, res) {
     
    if(req.body.status == 'PLACED')
    {        console.log(req.body.status)

           const result  = await Order.updateOne( { "name": req.body.name}, // Filter,
            {$set: {"status":'ACCEPTED'}}, // Update
            {upsert: true}  );
           console.log(result)
           
         
    } 
    if(req.body.status == 'ACCEPTED')
    {  
               Order.updateOne( { "name": req.body.name}, // Filter,
            {$set: {"status":'COOKING'}}, // Update
            {upsert: true}  );
    
           
         
    } 
    if(req.body.status == 'COOKING')
    {  
               Order.updateOne( { "name": req.body.name}, // Filter,
            {$set: {"status":'READY FOR PICKUP'}}, // Update
            {upsert: true}  );
    
           
         
    } 
    if(req.body.status == 'READY FOR PICKUP')
    {  
               Order.updateOne( { "name": req.body.name}, // Filter,
            {$set: {"status":'COMPLETED'}}, // Update
            {upsert: true}  );
    
           
         
    } 
     
   
   
    
  });

router.post("/login", async (req, res) => {
    const email = req.body.email;
    // Find user by email
      Order.findOne({ email }).then(user => {
        // Check if user email exists
        if (!user) {
            return res.status(404).json({
                error: "Email not found",
            });
        }
        else {
            res.send("Email Found");
            return user;
        }
    });


});


module.exports = router;