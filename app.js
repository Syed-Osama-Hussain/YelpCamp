var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");


var campgrounds = [
  {name: "Salmon Creek", image: "https://www.photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f1c071afe9b2bf_960.jpg&user=Free-Photos"},
  {name: "Granite Hill", image: "https://www.photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f1c071afe9b2bf_960.jpg&user=Free-Photos"},
  {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-3779280?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fea32b6062afc013ed1584d05fb1d4e97e07ee3d21cac104491f1c979aeedb6b9_960.jpg&user=skeeze"}
   ]


app.get("/",function(req,res){

  res.render("landing");
});

app.get("/campgrounds",function(req,res){
 
   res.render("campgrounds",{campgrounds: campgrounds});
});


app.post("/campgrounds",function(req,res){

  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image:image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");

});

app.get("/campgrounds/new",function(req,res){

  res.render("new");

});

app.listen("3000",function(){

  console.log("The server has started");

});