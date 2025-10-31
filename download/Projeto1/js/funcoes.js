function soma() {
    let subtotal = 0

    for (let i = 1; i <= 3; i++) {
        const totalProduto = document.getElementById('total_' + i)
        if (totalProduto) {
            let valor = parseFloat(totalProduto.innerHTML.replace('R$', '').replace(',', '.').trim())
            subtotal += valor
        }
    }

    document.getElementById('subtotal').innerHTML = 'R$ ' + subtotal.toFixed(2)
}

function alterarQtd(produto, acao){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    let quantidadeAtual = Number(qtd.innerHTML)

    if(acao === '-' && quantidadeAtual === 0){
        alert('Atenção! A quantidade não pode ser menor que 0.')
    } else {
        quantidadeAtual = (acao === '+') ? quantidadeAtual + 1 : quantidadeAtual - 1
        qtd.innerHTML = quantidadeAtual

        let preco = parseFloat(valor.innerHTML.replace('R$', '').replace(',', '.').trim())
        total.innerHTML = 'R$ ' + (quantidadeAtual * preco).toFixed(2)

        soma()
    }
}



