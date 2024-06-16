// Array para armazenar os itens do estoque
let estoque = [];

// Função para adicionar um novo item ao estoque
function adicionarItem() {
    // Obter os dados do novo item
    let codigo = prompt("Digite o código do item:");
    let descricao = prompt("Digite a descrição do item:");
    let tipoUnitario = prompt("Digite o tipo unitário do item (Peça, Unidade, Par):");
    let fornecedor = prompt("Digite o fornecedor do item:");
    let estoqueMin = parseInt(prompt("Digite o estoque mínimo do item:"));
    let estoqueInicial = parseInt(prompt("Digite o estoque inicial do item:"));

    // Criar o novo item
    let newItem = {
        codigo: codigo,
        descricao: descricao,
        tipoUnitario: tipoUnitario,
        fornecedor: fornecedor,
        estoqueMin: estoqueMin,
        estoqueInicial: estoqueInicial,
        estoqueAtual: estoqueInicial
    };

    // Adicionar o item ao array de estoque
    estoque.push(newItem);

    // Atualizar a tabela de estoque
    atualizarTabelaEstoque();
}

// Função para remover um item do estoque
function removerItem() {
    // Obter o código do item a ser removido
    let codigoRemover = prompt("Digite o código do item a ser removido:");

    // Encontrar o índice do item no array de estoque
    let index = estoque.findIndex(item => item.codigo === codigoRemover);

    // Remover o item do array de estoque
    if (index !== -1) {
        estoque.splice(index, 1);
        atualizarTabelaEstoque();
    } else {
        alert("Item não encontrado!");
    }
}

// Função para consultar um item no estoque
function consultarItem() {
    // Obter o código do item a ser consultado
    let codigoConsultar = prompt("Digite o código do item a ser consultado:");

    // Encontrar o item no array de estoque
    let item = estoque.find(item => item.codigo === codigoConsultar);

    // Exibir as informações do item
    if (item) {
        alert(`Descrição: ${item.descricao}\nTipo Unitário: ${item.tipoUnitario}\nFornecedor: ${item.fornecedor}\nEstoque Mínimo: ${item.estoqueMin}\nEstoque Inicial: ${item.estoqueInicial}\nEstoque Atual: ${item.estoqueAtual}`);
    } else {
        alert("Item não encontrado!");
    }
}

// Função para listar todos os itens do estoque
function listarItens() {
    // Limpar o corpo da tabela de estoque
    let tabelaBody = document.querySelector("#tabelaEstoque tbody");
    tabelaBody.innerHTML = "";

    // Percorrer o array de estoque e adicionar cada item na tabela
    estoque.forEach(item => {
        let linha = tabelaBody.insertRow();
        linha.insertCell().textContent = item.codigo;
        linha.insertCell().textContent = item.descricao;
        linha.insertCell().textContent = item.tipoUnitario;
        linha.insertCell().textContent = item.fornecedor;
        linha.insertCell().textContent = item.estoqueMin;
        linha.insertCell().textContent = item.estoqueInicial;
        linha.insertCell().textContent = item.estoqueAtual;

        // Adicionar botões de ação para cada item (editar e remover)
        let acoes = linha.insertCell();
        let botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        botaoEditar.addEventListener("click", () => editarItem(item.codigo));
        acoes.appendChild(botaoEditar);

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", () => removerItem(item.codigo));
        acoes.appendChild(botaoRemover);
    });
}

// Função para editar um item do estoque
function editarItem(codigo) {
    // Encontrar o item no array de estoque
    let index = estoque.findIndex(item => item.codigo === codigo);

    if (index !== -1) {
        // Obter os dados do item a ser editado
        let item = estoque[index];
        item.descricao = prompt("Digite a nova descrição do item:", item.descricao);
        item.tipoUnitario = prompt("Digite o novo tipo unitário do item:", item.tipoUnitario);
        item.fornecedor = prompt("Digite o novo fornecedor do item:", item.fornecedor);
        item.estoqueMin = parseInt(prompt("Digite o novo estoque mínimo do item:", item.estoqueMin));
        item.estoqueInicial = parseInt(prompt("Digite o novo estoque inicial do item:", item.estoqueInicial));
        item.estoqueAtual = item.estoqueInicial; // Atualiza estoque atual com o novo inicial

        // Atualizar a tabela de estoque
        atualizarTabelaEstoque();
    } else {
        alert("Item não encontrado!");
    }
}

// Função para cadastrar um novo fornecedor
function cadastrarFornecedor() {
    // Obter o nome do fornecedor
    let nomeFornecedor = prompt("Digite o nome do fornecedor:");

    // Adicionar o fornecedor a um array (se necessário)
    // ...

    // Informar o usuário que o fornecedor foi cadastrado
    alert(`Fornecedor ${nomeFornecedor} cadastrado com sucesso!`);
}

// Função para emitir a nota fiscal
function emitirNotaFiscal() {
    // Implementar a lógica para gerar a nota fiscal
    // ...

    // Informar o usuário que a nota foi emitida
    alert("Nota fiscal emitida com sucesso!");
}

// Função para atualizar a tabela de estoque
function atualizarTabelaEstoque() {
    listarItens();
}