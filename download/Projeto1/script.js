function calcularTotal() {
    const precos = document.querySelectorAll('.preco');
    const quantidades = document.querySelectorAll('.quantidade');
    const totais = document.querySelectorAll('.total');
    let subtotal = 0;

    for (let i = 0; i < precos.length; i++) {
        // Extrair e limpar o valor do preço
        const precoTexto = precos[i].innerText.replace('R$', '').replace('.', '').replace(',', '.');
        const preco = parseFloat(precoTexto);

        // Obter quantidade
        const qtd = parseInt(quantidades[i].value) || 0;

        // Calcular total da linha
        const totalProduto = preco * qtd;

        // Atualizar total no HTML
        totais[i].innerText = `R$ ${totalProduto.toFixed(2).replace('.', ',')}`;

        // Somar no subtotal
        subtotal += totalProduto;
    }

    // Mostrar subtotal
    document.getElementById('subtotal').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
}