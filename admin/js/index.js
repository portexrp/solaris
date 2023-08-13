import {Login} from "./controllers/sessions/login.js"

const login = new Login({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Login efetuado com sucesso!</h1>",
    error: "<h1 class='error'>Erro: Usuário ou Senha incorretos</h1>",
  });
    login.init();

