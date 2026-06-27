const apurarBonus = (residuo) => {
    const TarifaPorTonelada = (residuo.quantidade / 1000) * 200 
    if (residuo.quantidade < 1000) return 0
    const faixas = [
        {teto: 10000, percentual: 0.08},
        {teto: 15000, percentual: 0.10},
        {teto: 25000, percentual: 0.15},
        {teto: Infinity, percentual: 0.20},
    
    ]

    const faixaAtingida = faixas.find(({ teto })=> residuo.quantidade < teto)
     return TarifaPorTonelada * faixaAtingida.percentual
        
}

const apurarRendimento = (residuo) => {
     return(residuo.quantidade / 1000) * 200
}

const apurarMontanteFinal = (residuo) => {
    const rendimento = apurarRendimento(residuo)
    const bonus = apurarBonus(residuo)
    return rendimento + bonus
}

export { apurarBonus, apurarRendimento, apurarMontanteFinal}
