const btn = document.querySelectorAll('.btn')
btn.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elBtn = document.getElementById(this.id)
    const categoria = elBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivros(livrosFiltrados)

    if(categoria == 'disponivel') {
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirValoTotalLivros(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValoTotalLivros(valorTotal) {
    elValorTotalLivros.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}