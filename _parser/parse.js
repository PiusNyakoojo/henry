var fs = require('fs');
var path = require('path');

var filename = 'raw.json';
var output = 'parsed.json';
var filePath = path.join(__dirname, filename);

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err){
      var arr = JSON.parse(data),
            newArr = [];
      arr.forEach(function(item) { // result > extractorData > data[i] > group[0] > Media image[0] > alt
        if ( item.result.extractorData.data ) {
          var newItem = {};
          
          newItem.id = item.result.extractorData.data[0].group[0]["Vin value"][0].text;
          newItem.title = item.result.extractorData.data[0].group[0]["Media image"][0].alt;
          newItem.url = item.result.extractorData.url;
          newItem.imageSrc = item.result.extractorData.data[0].group[0]["Media image"][0].src;
          newItem.color = item.result.extractorData.data[0].group[0]["Exterior value"][0].text;

          newArr.push(newItem);
        }
      });

      fs.writeFile(output, JSON.stringify(newArr), function(err) {
        console.log("Finished boyyyyyy");
      });

    }else{
        console.log(err);
    }

});
