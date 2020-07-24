module.exports = function (application) {
	application.get('/convertcsv/:file', function (req, res) {
		application.src.controllers.convertcsv.index(application, req, res);
	});
};
