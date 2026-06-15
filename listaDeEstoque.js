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
    { id: 11, nome: "Café em Cápsula (10 un)", descricao: "Cápsulas de café expresso", quantidade: 35, preco: 22.50 },
    { id: 12, nome: "Leite UHT Integral 1L", descricao: "Leite longa vida integral", quantidade: 150, preco: 4.99 },
    { id: 13, nome: "Leite em Pó Integral 400g", descricao: "Leite desidratado", quantidade: 25, preco: 18.90 },
    { id: 14, nome: "Achocolatado em Pó 400g", descricao: "Achocolatado tradicional", quantidade: 60, preco: 8.99 },
    { id: 15, nome: "Biscoito Recheado 130g", descricao: "Biscoito sabor chocolate", quantidade: 100, preco: 2.99 },
    { id: 16, nome: "Biscoito Água e Sal 200g", descricao: "Biscoito tradicional", quantidade: 70, preco: 3.49 },
    { id: 17, nome: "Farinha de Trigo 1kg", descricao: "Farinha de trigo tipo 1", quantidade: 85, preco: 5.49 },
    { id: 18, nome: "Farinha de Mandioca 500g", descricao: "Farinha torrada", quantidade: 40, preco: 6.49 },
    { id: 19, nome: "Sal Refinado 1kg", descricao: "Sal iodado", quantidade: 110, preco: 2.49 },
    { id: 20, nome: "Molho de Tomate 340g", descricao: "Molho tradicional", quantidade: 95, preco: 2.89 },
    { id: 21, nome: "Queijo Mussarela 200g", descricao: "Queijo fatiado", quantidade: 30, preco: 11.90 },
    { id: 22, nome: "Presunto Cozido 200g", descricao: "Presunto fatiado", quantidade: 35, preco: 7.90 },
    { id: 23, nome: "Manteiga Com Sal 200g", descricao: "Manteiga extra", quantidade: 25, preco: 10.90 },
    { id: 24, nome: "Margarina 500g", descricao: "Margarina com sal", quantidade: 50, preco: 6.50 },
    { id: 25, nome: "Requeijão Tradicional 200g", descricao: "Requeijão cremoso", quantidade: 40, preco: 8.50 },
    { id: 26, nome: "Iogurte Natural 170g", descricao: "Iogurte integral", quantidade: 60, preco: 3.20 },
    { id: 27, nome: "Iogurte de Morango 1L", descricao: "Iogurte líquido", quantidade: 20, preco: 12.90 },
    { id: 28, nome: "Leite Fermentado (6 un)", descricao: "Bebida láctea", quantidade: 45, preco: 6.99 },
    { id: 29, nome: "Queijo Prato 200g", descricao: "Queijo fatiado", quantidade: 25, preco: 12.90 },
    { id: 30, nome: "Salame Italiano 100g", descricao: "Salame fatiado", quantidade: 15, preco: 14.50 },
    { id: 31, nome: "Peito de Peru 200g", descricao: "Peito de peru defumado", quantidade: 20, preco: 15.90 },
    { id: 32, nome: "Parmesão Ralado 50g", descricao: "Queijo parmesão", quantidade: 55, preco: 5.90 },
    { id: 33, nome: "Creme de Leite 200g", descricao: "Creme de leite UHT", quantidade: 80, preco: 3.89 },
    { id: 34, nome: "Leite Condensado 395g", descricao: "Leite condensado integral", quantidade: 90, preco: 6.49 },
    { id: 35, nome: "Massa de Pastel 500g", descricao: "Massa fresca rolo", quantidade: 25, preco: 8.90 },
    { id: 36, nome: "Pão de Forma 500g", descricao: "Pão tradicional fatiado", quantidade: 40, preco: 7.50 },
    { id: 37, nome: "Pão Integral 500g", descricao: "Pão de forma integral", quantidade: 30, preco: 9.50 },
    { id: 38, nome: "Bisnaguinha 300g", descricao: "Pão tipo bisnaguinha", quantidade: 35, preco: 6.90 },
    { id: 39, nome: "Ovos Brancos", descricao: "Cartela com 12 unidades", quantidade: 50, preco: 9.90 },
    { id: 40, nome: "Salsicha Hot Dog 500g", descricao: "Salsicha tradicional", quantidade: 40, preco: 8.90 },
    { id: 41, nome: "Refrigerante Cola 2L", descricao: "Refrigerante de cola", quantidade: 120, preco: 8.99 },
    { id: 42, nome: "Refrigerante Guaraná 2L", descricao: "Refrigerante de guaraná", quantidade: 100, preco: 7.99 },
    { id: 43, nome: "Água Mineral 1.5L", descricao: "Água sem gás", quantidade: 150, preco: 2.99 },
    { id: 44, nome: "Água Mineral Gás 1.5L", descricao: "Água com gás", quantidade: 80, preco: 3.49 },
    { id: 45, nome: "Suco de Laranja 1L", descricao: "Suco integral", quantidade: 30, preco: 14.90 },
    { id: 46, nome: "Suco de Uva 1L", descricao: "Suco integral", quantidade: 25, preco: 16.90 },
    { id: 47, nome: "Cerveja Pilsen 350ml", descricao: "Cerveja em lata", quantidade: 200, preco: 3.50 },
    { id: 48, nome: "Cerveja Puro Malte 350ml", descricao: "Cerveja puro malte", quantidade: 180, preco: 4.50 },
    { id: 49, nome: "Vinho Tinto Seco 750ml", descricao: "Vinho de mesa", quantidade: 40, preco: 35.90 },
    { id: 50, nome: "Vinho Branco Suave 750ml", descricao: "Vinho suave", quantidade: 35, preco: 29.90 },
    { id: 51, nome: "Energético 250ml", descricao: "Bebida energética", quantidade: 60, preco: 8.50 },
    { id: 52, nome: "Chá Gelado Pêssego 1L", descricao: "Chá pronto para beber", quantidade: 20, preco: 6.90 },
    { id: 53, nome: "Água de Coco 1L", descricao: "Água de coco de caixinha", quantidade: 30, preco: 9.90 },
    { id: 54, nome: "Bebida Láctea 200ml", descricao: "Sabor chocolate", quantidade: 80, preco: 2.50 },
    { id: 55, nome: "Suco Caju 1L", descricao: "Suco de caixinha", quantidade: 45, preco: 5.90 },
    { id: 56, nome: "Suco em Pó Uva 25g", descricao: "Preparo para refresco", quantidade: 150, preco: 1.20 },
    { id: 57, nome: "Cerveja IPA 500ml", descricao: "Cerveja artesanal", quantidade: 15, preco: 18.90 },
    { id: 58, nome: "Espumante Brut 750ml", descricao: "Vinho espumante", quantidade: 10, preco: 55.00 },
    { id: 59, nome: "Vodca 1L", descricao: "Vodca destilada", quantidade: 12, preco: 45.90 },
    { id: 60, nome: "Gin Dry 750ml", descricao: "Gin importado", quantidade: 8, preco: 85.90 },
    { id: 61, nome: "Sabão em Pó 1kg", descricao: "Lava roupas em pó", quantidade: 70, preco: 12.90 },
    { id: 62, nome: "Sabão Líquido 3L", descricao: "Lava roupas líquido", quantidade: 40, preco: 35.90 },
    { id: 63, nome: "Amaciante 2L", descricao: "Amaciante de roupas", quantidade: 60, preco: 14.90 },
    { id: 64, nome: "Detergente Neutro 500ml", descricao: "Lava louças líquido", quantidade: 150, preco: 2.49 },
    { id: 65, nome: "Esponja de Aço (8 un)", descricao: "Palha de aço", quantidade: 50, preco: 3.99 },
    { id: 66, nome: "Esponja Multiuso (3 un)", descricao: "Esponja dupla face", quantidade: 80, preco: 4.50 },
    { id: 67, nome: "Desinfetante Pinho 1L", descricao: "Desinfetante líquido", quantidade: 45, preco: 6.90 },
    { id: 68, nome: "Água Sanitária 2L", descricao: "Alvejante com cloro", quantidade: 75, preco: 5.50 },
    { id: 69, nome: "Limpador Multiuso 500ml", descricao: "Limpador de superfícies", quantidade: 65, preco: 4.90 },
    { id: 70, nome: "Álcool 70% 1L", descricao: "Álcool etílico hidratado", quantidade: 90, preco: 8.90 },
    { id: 71, nome: "Álcool em Gel 500g", descricao: "Álcool gel higienizador", quantidade: 40, preco: 11.90 },
    { id: 72, nome: "Inseticida 300ml", descricao: "Inseticida aerossol", quantidade: 30, preco: 13.90 },
    { id: 73, nome: "Saco de Lixo 50L", descricao: "Pacote com 30 unidades", quantidade: 50, preco: 15.90 },
    { id: 74, nome: "Saco de Lixo 100L", descricao: "Pacote com 15 unidades", quantidade: 40, preco: 18.90 },
    { id: 75, nome: "Papel Toalha", descricao: "Pacote com 2 rolos", quantidade: 60, preco: 6.50 },
    { id: 76, nome: "Guardanapo Papel", descricao: "Pacote com 50 unidades", quantidade: 80, preco: 3.50 },
    { id: 77, nome: "Purificador Ar 360ml", descricao: "Aromatizante de ambiente", quantidade: 25, preco: 12.50 },
    { id: 78, nome: "Sabão em Barra (5 un)", descricao: "Sabão glicerinado", quantidade: 45, preco: 9.90 },
    { id: 79, nome: "Limpa Vidros 500ml", descricao: "Limpador de vidros", quantidade: 35, preco: 7.90 },
    { id: 80, nome: "Lustra Móveis 200ml", descricao: "Polidor de móveis", quantidade: 20, preco: 8.50 },
    { id: 81, nome: "Papel Higiênico", descricao: "12 rolos folha dupla", quantidade: 55, preco: 22.90 },
    { id: 82, nome: "Sabonete 90g", descricao: "Sabonete em barra", quantidade: 120, preco: 2.50 },
    { id: 83, nome: "Sabonete Líquido 250ml", descricao: "Sabonete hidratante", quantidade: 30, preco: 9.90 },
    { id: 84, nome: "Shampoo 350ml", descricao: "Para cabelos normais", quantidade: 40, preco: 15.90 },
    { id: 85, nome: "Condicionador 350ml", descricao: "Para cabelos normais", quantidade: 40, preco: 17.90 },
    { id: 86, nome: "Creme Dental 90g", descricao: "Creme dental com flúor", quantidade: 100, preco: 4.50 },
    { id: 87, nome: "Escova Dental", descricao: "Kit com 2 unidades", quantidade: 45, preco: 12.90 },
    { id: 88, nome: "Fio Dental 50m", descricao: "Fio dental encerado", quantidade: 60, preco: 6.90 },
    { id: 89, nome: "Enxaguante Bucal 500ml", descricao: "Sem álcool", quantidade: 25, preco: 19.90 },
    { id: 90, nome: "Desodorante Aerossol", descricao: "Antitranspirante 150ml", quantidade: 50, preco: 14.90 },
    { id: 91, nome: "Desodorante Roll-on", descricao: "Antitranspirante 50ml", quantidade: 45, preco: 8.90 },
    { id: 92, nome: "Aparelho Barbear", descricao: "Pacote com 2 descartáveis", quantidade: 35, preco: 11.50 },
    { id: 93, nome: "Espuma Barbear 200ml", descricao: "Espuma hidratante", quantidade: 20, preco: 18.90 },
    { id: 94, nome: "Hastes Flexíveis", descricao: "Caixa com 150 unidades", quantidade: 60, preco: 5.90 },
    { id: 95, nome: "Algodão Discos 50g", descricao: "Para limpeza facial", quantidade: 40, preco: 6.50 },
    { id: 96, nome: "Absorvente (8 un)", descricao: "Com abas", quantidade: 70, preco: 5.50 },
    { id: 97, nome: "Protetor Solar FPS 50", descricao: "Loção 200ml", quantidade: 25, preco: 45.90 },
    { id: 98, nome: "Hidratante 400ml", descricao: "Loção corporal", quantidade: 30, preco: 25.90 },
    { id: 99, nome: "Lenços Umedecidos", descricao: "Pacote com 50 unidades", quantidade: 50, preco: 12.90 },
    { id: 100, nome: "Fralda Descartável M", descricao: "Pacote com 30 unidades", quantidade: 40, preco: 45.90 }
];

const corpoTabela = document.getElementById("corpo-tabela");

function exibirItens(){
    corpoTabela.innerHTML = ""
    produtos.forEach(produto =>{
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
        linha.setAttribute('id','linha')

        //Adicionando evento
        botaoEditar.setAttribute('onclick','editar()')       
        botaoExcluir.setAttribute('onclick','excluir(this)')
        
        
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
function excluir(id){
    id.parentElement.parentElement.remove()
}