module.exports = function (application) {
	application.get('/downloadjson/:file', function (req, res) {
		application.src.controllers.downloadjson.index(application, req, res);
	});
};
