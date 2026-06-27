
const formularioColeta = document.querySelector('#formulario')
const exibicaoResultado = document.querySelector('#resultado')

formularioColeta.addEventListener('submit' , (evt) =>{
    evt.preventDefault()
    const dados = new FormData(formularioColeta)

const novoResiduo ={
    descrição: dados.get('descrição'),
    quantidade: (dados.get('quantidade'))
}

registrarResiduo(novoResiduo)
formularioColeta.reset()
})

const  registrarResiduo = (itemResiduo =>{
residuoColetados.push(itemResiduo)
exibirRegistros()
})

const montarItemResiduo = (residuo, indice) => {
const ganho = calculoganho(residuo)
const valor = valorareceber(indice)
const tatotalidadegeral = ganho + valor
return

<div class="item-residuo">
    <span>${indice + 1} - ${residuo.descrição}</span>
    <span>quantidade ${indice + 1} - ${residuo.descrição}</span>
    <span>valorareceber ${indice + 1} - ${residuo.descrição}</span>
    <span>tatotalidadegeral${indice + 1} - ${residuo.descrição}</span>
    <span>calculoganho${indice + 1} - ${residuo.descrição}</span>
</div>
}

const exibirRegistros= () => {
    exibicaoResultado.innerHTML = residuoColetados.map((residuo, i) => montarItemResiduo(residuo, i)).join('')
}