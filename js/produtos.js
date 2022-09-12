const produtos = [
    {
        nome: 'Mouse Logitech',
        img: 'imgs/mouse-cod-001.jpg',
        preco: 600
    },

    {
        nome: 'Mac Book',
        img: 'imgs/macbook-cod-007.jpg',
        preco: 7999
    },

    {
        nome: 'Cabo Usb',
        img: 'imgs/cabousb-cod-003.jpg',
        preco: 20
    },

    {
        nome: 'Controle Xbox',
        img: 'imgs/controle-xbox-cod-006.jpg',
        preco: 150
    },

    {
        nome: 'Placa Mãe White',
        img: 'imgs/placamae-cod-002.jpg',
        preco: 5600
    },

    {
        nome: 'Teclado Logitech',
        img: 'imgs/teclado-logitech-cod-004.jpg',
        preco: 299
    },

    {
        nome: 'Teclado Mecânico',
        img: 'imgs/teclado-mecanico-cod-005.jpg',
        preco: 299
    }
]


iniciarLoja = () => {
    let containerProdutos = document.querySelector('div.container-produtos')
    produtos.map((value) => {
        containerProdutos.innerHTML += `
        <div class="produtos">
            <img src="${value.img}" alt="Imagem">
            <p class="nome-produto">
                ${value.nome}
            </p>
            <p class="preco-produto">
                R$ ${value.preco},00
            </p>
            <p class="adicionar-carrinho">
                <a href="#">Adicionar</a>
            </p>
        </div>`
    })
}

iniciarLoja()