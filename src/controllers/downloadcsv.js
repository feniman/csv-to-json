module.exports.index = function(application, req, res) {
	var file = req.params.file;
	res.download('./files/processed/'+file+'.csv');
}