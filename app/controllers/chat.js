module.exports.chat = function(app, req, res){

  var dadosForm = req.body;

  req.assert("apelido", "Name is required!!").notEmpty();
  req.assert("apelido", "Must contain between 3 and 10 characters!!").len(3, 10);

  var erros = req.validationErrors();
  if(erros){
    res.render("index", {validation: erros});
    return;
  }

  app.get('io').emit(
    'ClienteOn',
    {apelido: dadosForm.apelido, mensagem: ' ONLINE!!'}
  );

  res.render("chat", {dados: dadosForm});
}
