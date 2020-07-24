const fs = require('fs');
const processedFolder = './files/processed';

function processedFiles() {}

processedFiles.prototype.getProcessedFiles = function(callback) {

  fs.readdir(processedFolder, (err, files) => {
    var dateFormat = require('dateformat');
    var data = [];
    var i = 0;

    if (!err) {
      files.forEach(file => {
        if (file.substring(file.length - 4, file.length) == '.csv') {
          var dateFile = file.split('_-_');
          dateFile[0] = dateFormat(new Date(dateFile[0]), "dd/mm/yyyy hh:MM:ss");
          data[i] = {date : dateFile[0], filename : dateFile[1].split('.csv').join(''), file: file.split('.csv').join('')};
          i++;
        }
      });
    }
    callback(err, data);
  });
};

module.exports = function(){
  return processedFiles;
}