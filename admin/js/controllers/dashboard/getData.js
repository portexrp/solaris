/*Faz a validaçao do token se existir,
 se não existir ou estiver inválido 
 redireciona para o index.
 se existir e for válido, retorna os dados
 utilizando method GET
*/
let dataExport = []
const getData = () => {
    window.addEventListener('load', async () => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const response = await fetch("http://150.230.84.5:3000/dashboard", {
                    method: "GET",
                    headers: new Headers({
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        authorization: `Bearer ${token}`
                    }),

                });
                const data = await response.json()
                if (data.msg === 'Token expirado.' || data.msg === 'Token inválido.') {
                    return window.location = 'index.html'
                }
                const link = document.getElementById('orcamentoLink')
                const modal = document.getElementById('modal')
                console.log(data.orcamento)

                data.orcamento.map((orcamento) => {

                   link.innerHTML +=
                    `<div class="portfolio-item col-4 ">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#orcamentoModal${orcamento.id}">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"></div>
                        </div>
                        <div class="orcamento-caption">
                            <div class="orcamento-caption-heading">Orçamento n° ${orcamento.id}</div>
                            <div class="orcamento-caption-subheading text-muted">Cliente: ${orcamento.name}</div>
                        </div>
                        </a>
                    </div>
                    `
                    modal.innerHTML += `
                    <div class="portfolio-modal modal fade" id="orcamentoModal${orcamento.id}" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content modalOrcamento">
                        <div class="close-modal" data-bs-dismiss="modal"  style="margin-left: 20px;margin-top: 20px;"><img src="assets/img/close-icon.svg"  width="20px" alt="Close modal" /> Fechar
                        </div>
                        <div class="container">
                          <div class="row justify-content-center">
                            <div class="col-lg-11">
                              <div class="modal-body">
                                <form action="http://150.230.84.5:3000/form" method="post" id="orcamentoForm" data-form>
                                  <img src="" alt="">
                                  <!-- Project details-->
                                  <h2 class="text-uppercase modaTitle">Orçamento</h2>
                                  <p class="item-intro text-muted">Dados básicos</p>

                                  <label>Nome
                                  <input class="inputModal" type="text" id="nameOrcamento" value="${orcamento.name}">
                                  </label>
                                  <label>Email
                                  <input class="inputModal" type="email" id="emailOrcamento" value="${orcamento.email}"placeholder="Email">
                                  </label>
                                  <label>Telefone
                                  <input class="inputModal" type="tel" id="phoneOrcamento" value="${orcamento.phone}"
                                    placeholder="Celular/Telefone">
                                  </label>
                                  <label>Estado
                                  <input class="inputModal" type="text" id="estado" value="${orcamento.ufForm}">
                                  </label>
                                  <label>Cidade
                                  <input class="inputModal" type="text" id="cities" value="${orcamento.citiesForm}">
                                  </label>
                                  <label>Endereço
                                  <input class="inputModal" type="text" id="address" value="${orcamento.address}">
                                  </label>
                                  <hr>
                                  <p class="item-intro text-muted">Dados instalação</p>

                                  <label>Tipo de Instalação
                                  <input class="inputModal" id="instacao" value="${orcamento.instalation || 'Onde será instalado?'}" placeholder="Teste">
                                  </label>
                                  <label>Distribuidora
                                    <input class="inputModal" id="distribuidora_energia" value="${orcamento.powerDistributor}">
                                  </label>  
                                  <label>Consumo de Energia
                                     <input class="inputModal" type="text" value="${orcamento.consumption}" id="consumo" required>
                                  </label>
                                  <label>Telhado
                                  <input class="inputModal" id="telhado" value="${orcamento.roof}">
                                  </label>
                                  <label>Financiamento                
                                  <input class="inputModal" id="financiamento" value="${orcamento.financing}">
                                  </label>
                
                                  <button class="btn btn-primary btn-xl text-uppercase" id="submit-button" type="submit" data-button>
                                    Salvar
                                  </button>                                
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    `
                })

            } catch (error) {
                throw new Error(error);
            }
        } else {
            return window.location = 'index.html'
        }

    })
}

/*
Manipula a dom inserindo os elements
link e modal para acessar os orçamentos
*/



const structure = () => {
    const dados = getData()
   



}

structure()