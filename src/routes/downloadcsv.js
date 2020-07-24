module.exports = function (application) {
	application.get('/downloadcsv/:file', function (req, res) {
		application.src.controllers.downloadcsv.index(application, req, res);
	});
};
