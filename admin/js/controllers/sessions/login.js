const email = document.getElementById('email')
const password = document.getElementById('password')


function getDataFormLogin(){
    const login = {}
    login.email = email.value
    login.password = password.value
    return login
}


export class Login {
    constructor(settings) {
      this.settings = settings;
      this.form = document.getElementById('login');
      this.formButton = document.getElementById('submit');
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
      event.target.innerText = "Efetuando login...";
    }
  
    async sendForm(event) {
      
      try {
        this.onSubmission(event);
        const response = await fetch("http://150.230.84.5:3000/session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: 'include',
          mode: 'cors',
          body: JSON.stringify(getDataFormLogin()),
        });
        if (response.status === 200) {
            const data = await response.json()
            const {name, token} = data            
            localStorage.setItem('nome', JSON.stringify(name))  
            localStorage.setItem('token', JSON.stringify(token))                
            window.location.href = '\dashboard.html'        
        }else{
            return window.location.href = '\index.html' 

        }

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
  