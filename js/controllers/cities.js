
export function cities() {

    const urlUF = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

    const cities = document.getElementById('cities')
    const uf = document.getElementById('state')

    uf.addEventListener('change', async () => {
        const request = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/municipios`)
        const response = await request.json()
        let options = ''
        response.forEach(element => {
            options += `<option class="citiesOptions">${element.nome}</option>`

        });
        cities.innerHTML = options
    })

    window.addEventListener('load', async () => {
        const request = await fetch(urlUF)
        const response = await request.json()
        const options = document.createElement('optgroup')
        response.forEach(element => {
            options.innerHTML += `<option class="statesOptions">${element.sigla}</option>`
        });
        uf.append(options)
    })


}

