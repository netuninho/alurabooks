function aplicarDesconto(livros) {
    const desconto = 0.3
    let livrosDesconto = livros.map(livro => {
        // os 3 pontos cria uma copia de todo array/objeto para outro objeto
        return {...livro, preco: livro.preco -(livro.preco * desconto)}
    })

    return livrosDesconto
}