const fs = require('fs');
const jsonFolder = './files/json';

function jsonFiles() {}

jsonFiles.prototype.getJsonFiles = function(callback) {

  fs.readdir(jsonFolder, (err, files) => {
    var dateFormat = require('dateformat');
    var data = [];
    var i = 0;

    if (!err) {
      files.forEach(file => {
        if (file.substring(file.length - 5, file.length) == '.json') {
          var dateFile = file.split('_-_');
          dateFile[0] = dateFormat(new Date(dateFile[0]), "dd/mm/yyyy hh:MM:ss");
          data[i] = {date : dateFile[0], filename : dateFile[1], file: file};
          i++;
        }
      });
    }
    callback(err, data);
  });
};

module.exports = function(){
  return jsonFiles;
}