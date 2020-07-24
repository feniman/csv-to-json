module.exports.index = function(application, req, res) {
	res.render("addjson/index", {});
}

module.exports.upload = function(application, req, res) {
	var formidable = require('formidable');
	var fs = require('fs');
	var form = new formidable.IncomingForm();
	var dateFormat = require('dateformat');
	form.parse(req, function (err, fields, files) {
		var oldPath = files.fileToUpload.path;
		var dateNow = dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss");
		var newPath = './files/json/' + dateNow + '_-_' + files.fileToUpload.name;
		fs.rename(oldPath, newPath, function (err) {
			if (err) throw err;
			res.redirect('/');
		 	res.end();
		});
	});
}	