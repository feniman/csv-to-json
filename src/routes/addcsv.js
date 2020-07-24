module.exports = function (application) {
	application.get('/addcsv', function (req, res) {
		application.src.controllers.addcsv.index(application, req, res);
	});

	application.post('/addcsv', function (req, res) {
		application.src.controllers.addcsv.upload(application, req, res);
	});
};
