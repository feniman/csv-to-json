module.exports = function (application) {
	application.get('/addjson', function (req, res) {
		application.src.controllers.addjson.index(application, req, res);
	});

	application.post('/addjson', function (req, res) {
		application.src.controllers.addjson.upload(application, req, res);
	});
};
