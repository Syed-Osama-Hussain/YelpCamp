var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    flash         = require("connect-flash"),
    passport      = require("passport"),
    localStrategy = require("passport-local"),
    methodOverride= require("method-override"),
    Campground    = require("./models/campground"),
    seedsDB       = require("./seeds"),
    Comment       = require("./models/comment"),
    User          = require("./models/user");

app.use(methodOverride("_method"));
app.use(flash());    
var commentRoutes = require("./routes/comments"),
campgroundRoutes  = require("./routes/campgrounds"),
indexRoutes       = require("./routes/index");



mongoose.connect("mongodb://localhost/yelp_camp_V8", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
//seedsDB();

app.use(require("express-session")({
  secret: "Once again this is a secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next){
  res.locals.currUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use(indexRoutes);


var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});