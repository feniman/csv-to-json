module.exports = function (application) {
	application.get('/deletejson/:file', function (req, res) {
		application.src.controllers.deletejson.index(application, req, res);
	});

	application.post('/deletejson', function (req, res) {
		application.src.controllers.deletejson.upload(application, req, res);
	});
};
