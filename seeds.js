var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
   {
     name: "Cloud's Rest",
     image: "https://www.photosforclass.com/download/flickr-1430198323",
     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
   },

   {
    name: "Desert Mountain",
    image: "https://www.photosforclass.com/download/flickr-6108828094",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },

  {
    name: "Yosmite",
    image: "https://www.photosforclass.com/download/flickr-225912054",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }
]


function seedDB(){
  Campground.remove({},function(err){
    /*if(err){
      console.log(err);
    }
    console.log("Removed");

    data.forEach(function(seed){
      Campground.create(seed,function(err,camp){
        if(err){
          console.log(err);
        }else{
          console.log("Added a camp");
          Comment.create({
            text: "This is a great place, but I wish there was internet",
            author: "Homer"
          },function(err,comment){
            if(err){
              console.log(err);
            }else{
              camp.comments.push(comment);
              camp.save();
              console.log("Comment has been added");
            }
          });
        }
      });
    });*/
  });

}

module.exports = seedDB;