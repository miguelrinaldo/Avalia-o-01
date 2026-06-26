const media = []


const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

 formDados.addEventListener()

    const form_num = new FormData(formDados)


    let quantidade = parseFloat(form_num.get('quantidade'))
    let valor = parseFloat(form_num.get('valor'))
    let premiação = parseFloat(form_num.get('premiação'))
    let final = parseFloat(form_num.get('final'))
    
 
    console.log(quantidade, valor, premiação, final)

    let media = parseFloat(quantidade + valor + premiação + final )

    console.log(media)

    divResultado.innerHTML = `O valor final da soma ${media.toFixed(2).replace('.', ',')}` 
})