class LoginController { 
  index(req, res) {
    res.render('index');
  }

  async acesso(req, res) {
    try {
      const login = new Login(req.body);
      await login.login();
      if (login.erros.length > 0) {
        req.flash('erros', login.erros);
        req.session.save(() => {
          return res.redirect('back');
        });
        return;
      }
      req.flash('success', 'Logado com sucesso');
      req.session.user = login.usuario;
      req.session.save(() => {
        return res.redirect('back');
      });
    } catch (erro) {
      console.log(erro);
      return res.render('404');
    }
  }
  
  sair(req, res) {
    req.session.destroy();
    res.redirect('/');
  }
}

module.exports = new LoginController();