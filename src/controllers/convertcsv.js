module.exports.index = function(application, req, res) {
	var file = req.params.file;
	var csv = require('csv-parser');
	var fs = require('fs');

	var oldPath = './files/csv/' + file;

	var data = [];
	var i = 0;
	fs.createReadStream(oldPath)
		.pipe(csv())
		.on('data', (row) => {
			data[i] = row;
			i++;
		})
		.on('end', () => {
			fs.appendFile('./files/processed/' + file.split('.csv').join('.json'), JSON.stringify(data), function (err) {
				if (err) throw err;
				var newPath = './files/processed/' + file;
				fs.rename(oldPath, newPath, function (err) {
					if (err) throw err;
					res.redirect('/');
				 	res.end();
				});
			});
		});

	
}