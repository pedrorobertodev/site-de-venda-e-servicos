const usados = [
    {
        nome: "Camiseta Polo",
        preco: 50.00,
        descricao: "Camiseta polo em algodão de alta qualidade, tamanho M",
        imagem: "../components/photos/camisa polo.png"
    },

    {
        nome: "Calça Jeans",
        preco: 80.00,
        descricao: "Calça jeans masculina nova, tamanho 42",
        imagem: "../components/photos/calçajeans.png"
    },

     {
        nome: "Tenis Esportivo",
        preco: 250.00,
        descricao: "Tenis esportivo, usado poucas vezes, em ótimo estado",
        imagem: "../components/photos/tenis esportivo.png"
    },

     {
        nome: "Relogio de Pulso",
        preco: 100.00,
        descricao: "usado vem com caixa e manual, pra sair rapido",
        imagem: "../components/photos/relogio de pulso.png"
    },

     {
        nome: "Oculos de Sol",
        preco: 70.00,
        descricao: "Oculos de sol, nunca usei",
        imagem: "../components/photos/oculos de sol.png"
    },

     {
        nome: "cueca boxer masculina",
        preco: 10.00,
        descricao: "Usei poucas vezes, está em ótimo estado",
        imagem: "../components/photos/cueca boxer.png"
    },
    
];

const listaUsados = document.querySelector("#lista-usados");

const listaServicos = document.querySelector("#lista-servicos");

const servicos = [
    {
        nome: "Serviço de Limpeza",
        preco: 150.00,
        descricao: "Serviço de limpeza residencial completo, incluindo limpeza de pisos, janelas e móveis.",
        imagem: "../components/photos/servico de limpeza.png"
    },

    {
        nome: "Serviço de Jardinagem",
        preco: 200.00,
        descricao: "Serviço de jardinagem profissional, incluindo poda, plantio e manutenção do jardim.",
        imagem: "../components/photos/servico de jardinagem.png"
    },

    {
        nome: "Serviço de Reparo de Eletrodomésticos",
        preco: 100.00,
        descricao: "Serviço de reparo de eletrodomésticos, incluindo conserto de geladeiras, máquinas de lavar e micro-ondas.",
        imagem: "../components/photos/servico de eletrodomesticos.png"
    },

    {
        nome: "Serviço de Transporte",
        preco: 80.00,
        descricao: "Serviço de transporte de mercadorias, incluindo entrega rápida e segura.",
        imagem: "../components/photos/servico de transporte.png"
    },

    {
        nome: "Serviço de Consultoria Financeira",
        preco: 300.00,
        descricao: "Serviço de consultoria financeira, incluindo análise de investimentos e planejamento financeiro.",
        imagem: "../components/photos/servico de consultoria.png"
    },

    {
        nome: "Serviço de Design Gráfico",
        preco: 250.00,
        descricao: "Serviço de design gráfico, incluindo criação de logotipos, banners e materiais promocionais.",
        imagem: "../components/photos/servico de design.png"
    },
    
];

usados.forEach((produto) => {
    const card = document.createElement("article");
    card.classList.add("produto-card");

    const imagem = document.createElement("img");
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;
    imagem.classList.add("produto-imagem");

    const nome = document.createElement("h2");
    nome.textContent = produto.nome;

    const descricao = document.createElement("p");
    descricao.textContent = produto.descricao;

    const preco = document.createElement("p");
    preco.textContent = `R$ ${produto.preco.toFixed(2).replace(".", ",")}`;

    card.append(imagem, nome, descricao, preco);
    listaUsados.append(card);
});

servicos.forEach((servico) => {
    const card = document.createElement("article");
    card.classList.add("produto-card");

    const imagem = document.createElement("img");
    imagem.src = servico.imagem;
    imagem.alt = servico.nome;
    imagem.classList.add("produto-imagem");

    const nome = document.createElement("h2");
    nome.textContent = servico.nome;

    const descricao = document.createElement("p");
    descricao.textContent = servico.descricao;

    const preco = document.createElement("p");
    preco.textContent = `R$ ${servico.preco.toFixed(2).replace(".", ",")}`;

    card.append(imagem, nome, descricao, preco);
    listaServicos.append(card);
});