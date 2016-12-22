// Imports
var fs = require('fs');
var path = require('path');

var mongoose = require('mongoose');
var authInfo = require('./dbAuthInfo');

// Config
var filename = '../parser/parsed.json';
var filePath = path.join(__dirname, filename);

mongoose.connect(`mongodb://${authInfo.dbuser}:${authInfo.dbpassword}@ds117348.mlab.com:17348/car-data`);
var db = mongoose.connection;


var CarSchema = mongoose.Schema({
  id: String,
  title: String,
  url: String,
  imageSrc: String,
  color: String
});

CarSchema.index({
  title: 'text',
  color: 'text'
}, {
  name: 'TextIndex',
  weights: {
    title: 10,
    color: 6
  }
});

var Car = mongoose.model('Car', CarSchema);


upload();



function upload() {
  fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data){
      if (!err) {
        var arr = JSON.parse(data);

        arr.forEach(function(item) {
          var doc = new Car({
            id: item.id,
            title: item.title,
            url: item.url,
            imageSrc: item.imageSrc,
            color: item.color
          });

          doc.save(function(err, resp) {
            if (err) return console.error(err);
            console.log("Saved:", resp.title);
          });
        });
      } else {
        console.log(err);
      }
  });
}

function cleanseDB() {
  Car.remove({}, function(err) {
    if (err) console.error(err);
    console.log("Delete complete!");
  });
  // remove everything from Car collection
}
