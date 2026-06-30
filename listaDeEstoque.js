const produtos = [
    { id: 1, nome: "Arroz Branco 5kg", descricao: "Arroz agulhinha tipo 1", quantidade: 45, preco: 24.90 },
    { id: 2, nome: "Feijão Carioca 1kg", descricao: "Feijão tipo 1", quantidade: 60, preco: 7.99 },
    { id: 3, nome: "Feijão Preto 1kg", descricao: "Feijão preto tipo 1", quantidade: 30, preco: 8.49 },
    { id: 4, nome: "Macarrão Espaguete 500g", descricao: "Massa de sêmola", quantidade: 80, preco: 3.99 },
    { id: 5, nome: "Macarrão Penne 500g", descricao: "Massa de sêmola com ovos", quantidade: 55, preco: 4.49 },
    { id: 6, nome: "Óleo de Soja 900ml", descricao: "Óleo refinado tipo 1", quantidade: 120, preco: 5.99 },
    { id: 7, nome: "Azeite de Oliva 500ml", descricao: "Azeite extra virgem", quantidade: 25, preco: 29.90 },
    { id: 8, nome: "Açúcar Refinado 1kg", descricao: "Açúcar branco", quantidade: 90, preco: 4.59 },
    { id: 9, nome: "Açúcar Mascavo 500g", descricao: "Açúcar natural", quantidade: 20, preco: 6.99 },
    { id: 10, nome: "Café em Pó 500g", descricao: "Café torrado e moído", quantidade: 40, preco: 16.90 },
];

/* const produtos = [
    { id: 1, nome: "Arroz Branco 5kg", descricao: "Arroz agulhinha tipo 1", quantidade: 45, preco: 24.90 },
    { id: 2, nome: "Feijão Carioca 1kg", descricao: "Feijão tipo 1", quantidade: 60, preco: 7.99 },
    { id: 3, nome: "Feijão Preto 1kg", descricao: "Feijão preto tipo 1", quantidade: 30, preco: 8.49 },
    { id: 4, nome: "Macarrão Espaguete 500g", descricao: "Massa de sêmola", quantidade: 80, preco: 3.99 },
    { id: 5, nome: "Macarrão Penne 500g", descricao: "Massa de sêmola com ovos", quantidade: 55, preco: 4.49 },
    { id: 6, nome: "Óleo de Soja 900ml", descricao: "Óleo refinado tipo 1", quantidade: 120, preco: 5.99 },
    { id: 7, nome: "Azeite de Oliva 500ml", descricao: "Azeite extra virgem", quantidade: 25, preco: 29.90 },
    { id: 8, nome: "Açúcar Refinado 1kg", descricao: "Açúcar branco", quantidade: 90, preco: 4.59 },
    { id: 9, nome: "Açúcar Mascavo 500g", descricao: "Açúcar natural", quantidade: 20, preco: 6.99 },
    { id: 10, nome: "Café em Pó 500g", descricao: "Café torrado e moído", quantidade: 40, preco: 16.90 },
];*/

const corpoTabela = document.getElementById("corpo-tabela");

function exibirItens() {
    corpoTabela.innerHTML = ""
    produtos.forEach(produto => {
        //Criado os elementos
        const linha = document.createElement('tr')
        const codigo = document.createElement('td')
        const nome = document.createElement('td')
        const descricao = document.createElement('td')
        const quantidade = document.createElement('td')
        const preco = document.createElement('td')
        const editar = document.createElement('td')
        const botaoEditar = document.createElement('button')
        const excluir = document.createElement('td')
        const botaoExcluir = document.createElement('button')

        //Adicionando atributos
        linha.setAttribute('id', 'linha')

        //Adicionando evento
        botaoEditar.setAttribute('onclick', 'editar(this)')
        botaoExcluir.setAttribute('onclick', 'excluir(this)')
        botaoEditar.setAttribute('id', 'buttonEditar')


        //Populando cada elemento criado
        codigo.textContent = produto.id
        nome.textContent = produto.nome
        descricao.textContent = produto.descricao
        quantidade.textContent = produto.quantidade
        preco.textContent = produto.preco
        botaoEditar.textContent = 'Editar'
        botaoExcluir.textContent = 'Excluir'


        editar.appendChild(botaoEditar)
        excluir.appendChild(botaoExcluir)

        //inserindo no a linha
        linha.append(codigo, nome, descricao, quantidade, preco, editar, excluir)

        //adicionando a linha no corpo da tabela.
        corpoTabela.append(linha)
    })
}

exibirItens()

//Função excluir
function excluir(botaoExcluir) {
    //botaoEditar.parentElement.parentElement.remove()
    const IdProduto = botaoExcluir.parentElement.parentElement.querySelectorAll('td')[0].textContent
    //Encontra o itemm no array de produtos
    const indexProduto = produtos.findIndex((produto, index) => produto.id == IdProduto)
    produtos.splice(indexProduto, 1)
    exibirItens()
}

//Função de editar
function editar(botaoEditar) {
    const todasColunas = botaoEditar.parentElement.parentElement.querySelectorAll('td');
    const colunaEditar = todasColunas[5]
    const buttonEditar = colunaEditar.children[0];
    buttonEditar.setAttribute('disabled', 'true')
    buttonEditar.setAttribute('style', 'display:none')
    const botaoSalvar = document.createElement('button')
    botaoSalvar.innerHTML = 'Salvar'
    botaoSalvar.setAttribute('onclick', 'salvar(this)')
    modoEdicao = true;
    
    colunaEditar.append(botaoSalvar)
    for (i = 1; i <= 4; i++) {

        const coluna = todasColunas[i]
        const valor = coluna.textContent
        let inputProduto = document.createElement('input');
        coluna.innerHTML = `
            <input value='${valor}'>
        `
    }

}



function salvar(botaoSalvar) {
    const IdProduto = botaoSalvar.parentElement.parentElement.querySelectorAll('td')[0].textContent
    const todasColunas = botaoSalvar.parentElement.parentElement.querySelectorAll('td');
    //Encontra o itemm no array de produtos
    const indexProduto = produtos.findIndex((produto, index) => produto.id == IdProduto)
    console.log
    produtos[indexProduto].nome = botaoSalvar.parentElement.parentElement.querySelectorAll('td')[1].children[0].value
    produtos[indexProduto].descricao = botaoSalvar.parentElement.parentElement.querySelectorAll('td')[2].children[0].value
    produtos[indexProduto].quantidade = botaoSalvar.parentElement.parentElement.querySelectorAll('td')[3].children[0].value
    produtos[indexProduto].preco = botaoSalvar.parentElement.parentElement.querySelectorAll('td')[4].children[0].value
    console.log(produtos[0])
    // DESATIVE o modo edição
    modoEdicao = false;
    
    exibirItens()
}