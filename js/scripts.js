
import { FormSubmit } from "./controllers/formOrcamento.js";
import { cities } from "./controllers/cities.js"
import { callback } from "./controllers/recaptcha.js"
import { scroll } from "./controllers/scroll.js"

scroll()
callback() 

cities()

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
  formSubmit.init();
  