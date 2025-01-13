document.getElementById('btn').addEventListener('click', () => {
    pegarUmConselhoAleatorio()
})

async function conselhosAleatorios() {
    try {
        const url = "https://api.adviceslip.com/advice"
        const resposta = await fetch(url)
        return await resposta.json()
    } catch (error) {
        console.log(error)
    }
}

async function pegarUmConselhoAleatorio() {
    try {
        const conselhos = await conselhosAleatorios()
        const descricaoConselho = conselhos.slip.advice
        const novosConselhos = document.getElementById('conselho')
        const conselhoId = document.querySelector('.numero-conselho')
        conselhoId.innerText = `ADVICE # ${conselhos.slip.id}`
        novosConselhos.innerText = descricaoConselho
    } catch(error){
        console.log(error)
    }
}