module.exports.index = function(application, req, res) {
	var file = req.params.file;
	res.render("deletecsv/index", {file: file});
}

module.exports.upload = function(application, req, res) {
	var fs = require('fs');
	var path = './files/csv/'+req.body.file;
	try {
		fs.unlinkSync(path)
	} catch(err) {
		console.error(err)
	}
	res.redirect('/');
}	