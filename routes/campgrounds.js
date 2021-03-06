var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");
var moment = require("moment");


router.get("/",function(req,res){ 
  Campground.find({},function(err,campgrounds)
  {
      if(err)
      {
        console.log(err);
      }else
      {
        res.render("campgrounds/index",{campgrounds: campgrounds});
      }
  });   
  });
  
  
router.post("/",middleware.isLoggedIn,function(req,res){
  
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
      id: req.user._id,
      username: req.user.username
    }
    var cost = req.body.cost;
    var newCampground = {name: name, image:image, description:desc, author: author,cost: cost};
    Campground.create(newCampground,function(err,newCamp){
        if(err)
        {
          console.log(err);
        }else
        {
          res.redirect("/campgrounds");
        }
  });
  });

  
router.get("/new",middleware.isLoggedIn,function(req,res){
  
    res.render("campgrounds/new");
  
  });

  
router.get("/:id",function(req,res){
  
    Campground.findById(req.params.id).populate("comments").exec(function(err,FoundCamp){
      if(err)
      {
        console.log(err);
      }else
      {
        res.render("campgrounds/show",{campground: FoundCamp,moment: moment});
      }
    });
  });


router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req,res){
    
    Campground.findById(req.params.id,function(err,found){
        res.render("campgrounds/edit",{campground: found});
});
});

  
router.put("/:id",middleware.checkCampgroundOwnership,function(req,res){
   
  Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,found){
      if(err){
        res.redirect("/campgrounds");
      }else{
        res.redirect("/campgrounds/" + req.params.id);
      }
    });
  });


  router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
    Campground.findByIdAndRemove(req.params.id,function(err){
      if(err){
        res.redirect("/campgrounds");
      }else{
        req.flash("success","Campground deleted.");
        res.redirect("/campgrounds");
      }
    });
  });

  
module.exports = router;