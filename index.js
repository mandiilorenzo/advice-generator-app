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

conselhosAleatorios()

// async function pegarUmConselho(slip_id) {
//     try {
//         const url = `https://api.adviceslip.com/advice/${slip_id}`
//         const resposta = await fetch(url)
//         // return await resposta.json()
//         console.log(await resposta.json())
//     } catch(error) {
//         console.log(error)
//     }
// }


async function pegarUmConselhoAleatorio() {
    try {
        const conselhos = await conselhosAleatorios()
        // console.log(conselhos)
        const descricaoConselho = conselhos.slip.advice
        const novosConselhos = document.getElementById('conselho')
        novosConselhos.innerText = descricaoConselho
        // console.log(descricaoConselho)
    } catch(error){
        console.log(error)
    }
}