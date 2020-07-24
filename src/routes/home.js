module.exports = function(application){
  application.get('/', function(req, res){
    application.src.controllers.home.index(application, req, res);
  });
}