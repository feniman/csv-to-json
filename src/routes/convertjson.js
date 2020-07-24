module.exports = function (application) {
	application.get('/convertjson/:file', function (req, res) {
		application.src.controllers.convertjson.index(application, req, res);
	});
};
