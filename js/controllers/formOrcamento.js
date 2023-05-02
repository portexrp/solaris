
function form (){

    const citiesForm = document.getElementById('cities')
  const ufForm = document.getElementById('state')
  const nome = document.getElementById('nameOrcamento')
  const email = document.getElementById('emailOrcamento')
  const phone = document.getElementById('phoneOrcamento')
  const address = document.getElementById('adress')
  const instalation = document.getElementById('instalacao')
  const powerDistributor = document.getElementById('distribuidora_energia')
  const consumption = document.getElementById('consumo')
  const roof = document.getElementById('telhado')
  const financing = document.getElementById('financiamento')
  
  
  const dados = {
    citiesForm: citiesForm?.value,
    ufForm: ufForm?.value,
    name: nome?.value,
    email: email?.value,
    phone: phone?.value,
    address: address?.value,
    instalation: instalation?.value,
    powerDistributor: powerDistributor?.value,
    consumption: consumption?.value,
    roof: roof?.value,
    financing: financing?.value
  }
  return dados
  
  }
  
  
  export class FormSubmit {
      constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
          this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
      }
    
      displaySuccess() {
        this.form.innerHTML = this.settings.success;
      }
    
      displayError() {
        this.form.innerHTML = this.settings.error;
      }
     
      onSubmission(event) {
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerText = "Enviando...";
      }
    
      async sendForm(event) {
        try {
          this.onSubmission(event);
          await fetch(this.url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(form()),
          });
          this.displaySuccess();
        } catch (error) {
          this.displayError();
          throw new Error(error);
        }
        
      }
    
      init() {
        if (this.form) this.formButton.addEventListener("click", this.sendForm);
        return this;
      }
    }
    