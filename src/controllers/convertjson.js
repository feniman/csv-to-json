module.exports.index = function(application, req, res) {
	var fs = require('fs');
	var createCsvWriter = require('csv-writer').createObjectCsvWriter;
	var file = req.params.file;
	var oldPath = './files/json/' + file;
	var newPath = './files/processed/' + file

	fs.readFile(oldPath, 'utf8', function(err, result) {
		if (!err) {
    		var arrayObj = JSON.parse(result);
    		var obj = arrayObj.shift();
    		var keyObj = Object.keys(obj);
    		var header = [];
    		keyObj.forEach(function(key, i) {
    			header[i] = {id: key, title: key};
    		});
			var csvWriter = createCsvWriter({
				path: newPath.split('.json').join('.csv'),
				header: header
			});
			csvWriter
			.writeRecords(arrayObj)
			.then(function() {
				fs.rename(oldPath, newPath, function (err) {
					if (err) throw err;
					res.redirect('/');
				 	res.end();
				});
			});
    	};
	});
}