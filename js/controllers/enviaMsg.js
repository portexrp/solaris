export function enviaMsg() {
 
    const whatsapp = document.getElementById('contactForm')
  
    whatsapp.addEventListener('submit', (event)=>{
      event.preventDefault()
      const nome = document.getElementById('name').value
      const email = document.getElementById('email').value
      const phone = document.getElementById('phone').value
      const message = document.getElementById('message').value
      if(nome && message == ''){
        alert('Campo obrigatório não preenchido')
      }
      let url = ` https://api.whatsapp.com/send?phone=5516992881275&text= Olá me chamo ${nome}, email: ${email}, tel: ${phone}, gostaria de saber mais sobre ${message}`
      window.open(url)
    })
     
  }