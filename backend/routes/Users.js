var express = require("express");
var router = express.Router();
const app = express();
// Load User model
const User = require("../models/user");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
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
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        Age:req.body.Age,
        Batch:req.body.Batch
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
router.post("/login",async (req, res) => {
	const email = req.body.email;
	// Find user by email
	const result = await User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send("Email Found");
            return user;
        }
	});
    
    
});
router.post("/wallet",async (req, res) => {
	const email = req.body.email;
	// Find user by email
	const result = await User.updateOne( { "email": req.body.email}, // Filter,
  {$set: {"Wallet":req.body.Wallet}}, // Update
  {upsert: true}  );

  console.log(result)
    
    
});

app.post("/userloged", (req, res) => {
 
    res.redirect("/users");
});
  
    
module.exports = router;