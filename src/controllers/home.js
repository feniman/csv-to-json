module.exports.index = function(application, req, res) {
  var csvModel = new application.src.models.csvFiles();
  var jsonModel = new application.src.models.jsonFiles();
  var processedModel = new application.src.models.processedFiles();
  var cfiles = [];
  var jfiles = [];
	
  csvModel.getCsvFiles(function(err, result) {
  	cfiles = result;
    jsonModel.getJsonFiles(function(err, result) {
    	jfiles = result;
      processedModel.getProcessedFiles(function(err, result) {
        pfiles = result;
        res.render("home/index", {csvFiles : cfiles, jsonFiles : jfiles, processedFiles : pfiles});
      });
    });

  });



}