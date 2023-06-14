
import { FormSubmit } from "./controllers/formOrcamento.js";
import { cities } from "./controllers/cities.js"
import { callback } from "./controllers/recaptcha.js"
import { scroll } from "./controllers/scroll.js"
import { enviaMsg } from "./controllers/enviaMsg.js"

scroll()
callback() 
cities()
enviaMsg()
const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Orçamento enviado com sucesso, entraremos em contato o mais breve possível!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
  formSubmit.init();
  
