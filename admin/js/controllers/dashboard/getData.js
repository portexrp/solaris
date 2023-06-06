/*Faz a validaçao do token se existir,
 se não existir ou estiver inválido 
 redireciona para o index.
 se existir e for válido, retorna os dados
 utilizando method GET
*/
const getData = ()=>{
    window.addEventListener('load', async () => {
        const token = localStorage.getItem('token')    
        if (token) {
            try {
                const response = await fetch("http://localhost:3000/dashboard", {
                    method: "GET",
                    headers: new Headers ({
                        "Content-Type": "application/json",
                        Accept: "application/json",       
                        authorization: `Bearer ${token}`
                    }),
                    
                });
                const data = await response.json()
    
                if (data.msg === 'Token expirado.' || data.msg ==='Token inválido.') {
                    return window.location = 'index.html'
                }
    
                return data
    
            } catch (error) {            
                throw new Error(error);
            }
        }else{
            return window.location = 'index.html'
        }
    
    })
} 

/*
Manipula a dom inserindo os elements
link e modal para acessar os orçamentos
*/

const structure = ()=>{
    const dados = getData()
    const link = document.getElementById('orcamentoLink')
    const modal= document.getElementById('modal')
    
}
