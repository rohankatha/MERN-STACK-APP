var express = require("express");
var router = express.Router();
const app = express();
// Load Vendor model
const Vendor = require("../models/vendor");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    Vendor.find(function(err, users) {
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
    const newUser = new Vendor({
        name: req.body.name,
        email: req.body.email,
        Vendorname: req.body.Vendorname,
        Contact: req.body.Contact,
        Openingtime: req.body.Openingtime,
        Closingtime: req.body.Closingtime,
       
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
router.post("/login", (req, res) => {
	const email = req.body.email;
	// Find user by email
	Vendor.findOne({ email }).then(user => {
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



app.post("/userloged", (req, res) => {
 
    res.redirect("/users");
});
  
    
module.exports = router;