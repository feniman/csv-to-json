module.exports = function (application) {
	application.get('/deletecsv/:file', function (req, res) {
		application.src.controllers.deletecsv.index(application, req, res);
	});

	application.post('/deletecsv', function (req, res) {
		application.src.controllers.deletecsv.upload(application, req, res);
	});
};
