const items = [
    {
        id: 0,
        nome: 'Bolo de Pote de Chocolate',
        description: 'Bolo de pote de chocolate, com cobertura e recheio de chocolate ao leite.',
        img: 'https://www.receitaculinarias.com.br/wp-content/uploads/2019/08/bolo-no-pote-de-brigadeiro-2-1200x900.png',
        price: '9.99',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'Bolo de Pote Ninho c/ Nutella',
        description: 'Bolo de pote com maravilhosos recheios de ninho e nutella.',
        img: 'https://cdn.guiadacozinha.com.br/wp-content/uploads/2019/10/bolo-leite-ninho-nutella-potinho.jpg',
        price: '12.99',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'Bolo de Pote Ninho c/ Morango',
        description: 'Bolo de pote com maravilhoso recheio de ninho e morango.',
        img: 'https://cooknenjoy.com/wp-content/uploads/2017/11/P1120445.jpg',
        price: '12.99',
        quantidade: 0
    },

    {
        id: 3,
        nome: 'Torta Holandesa - Fatia',
        description: 'Excelente sobremesa para se deliciar logo após almoço.',
        img: 'https://quepratobom.com.br/wp-content/uploads/2019/07/torta-holandesa-500x375.jpg',
        price: '9.99',
        quantidade: 0
    },

    {
        id: 4,
        nome: 'Torta Holandesa - Inteira',
        description: 'Excelente sobremesa para se deliciar com a familia.',
        img: 'https://d1uz88p17r663j.cloudfront.net/resized/67b6397ee2dde130c5eed837ffafb61f_torta-holandesa-receitas-nestle_1200_600.jpg',
        price: '27.99',
        quantidade: 0
    },

    {
        id: 5,
        nome: 'Torta de Limão - Fatia',
        description: 'Excelente sobremesa para se deliciar durante todo o dia.',
        img: 'https://i.pinimg.com/originals/81/75/6d/81756db152fec8eec4659f10aae8897f.jpg',
        price: '9.99',
        quantidade: 0
    },

    {
        id: 6,
        nome: 'Bolo de Laranja',
        description: 'Bolo excelente para um café da tarde, todos os dias bem fresquinho.',
        img: 'https://img.itdg.com.br/tdg/images/recipes/000/013/953/323851/323851_original.jpg',
        price: '8.99',
        quantidade: 0
    },

    {
        id: 7,
        nome: 'Bolo de Mandioca',
        description: 'Bolo excelente para um café da tarde, todos os dias bem fresquinho.',
        img: 'https://img.cybercook.com.br/receitas/773/bolo-de-mandioca-3-623x350.jpeg',
        price: '8.99',
        quantidade: 0
    },

    {
        id: 8,
        nome: 'Pudim de Leite Condensado',
        description: 'Excelente sobremesa para se deliciar com a familia.',
        img: 'https://s2.glbimg.com/1FLHGlHMYjcoylHCvcc93k9JsSU=/0x0:1800x1400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/t/2/dpV1FkS4WByGHfml8S1w/pudim.jpg',
        price: '19.99',
        quantidade: 0
    },
]
// Funcionalidade do scroll top
window.onscroll = function(){
    scroll()
}

function scroll(){
    let btn_top = document.querySelector('#btn_top')
    if (document.documentElement.scrollTop > 100){
        btn_top.style.display = "block"
    }else{
        btn_top.style.display = "none"
    }
}

function backToTop(){
    document.documentElement.scrollTop = 0
}

function replacePontoVirgula(price){
    return price.replace('.', ',')
}

function inicializarLoja(){
    const gridProdutos = document.querySelector('#grid-produtos')

    items.map((val) => {
        gridProdutos.innerHTML += `
        <div class="produto-single">
            <img src="${val.img}" alt="${val.nome}">
            <h2 chave="${val.nome}">${val.nome}</h2>
            <p>${val.description}</p>
            <p class="displayPrice">R$${replacePontoVirgula(val.price)}</p>
            <a key="${val.id}" href="" class="produtoAdd"><i class="fas fa-shopping-cart"></i>Adicionar</a>
        </div>    
        `
    })
}

function atualizarCarrinho(){
    const gridCarrinho = document.querySelector('#grid-carrinho')
    const enviarPedido = document.querySelector('#enviarPedido')
    const totalBox = document.querySelector('.totalBox')
    const counter = document.querySelector('#counter')
    let price = 0
    gridCarrinho.innerHTML = ""
    totalBox.innerHTML =""
    counter.innerHTML =""



    items.map((val) => {
        if(val.quantidade > 0){
            price += Number(val.price * val.quantidade)
            let valor = Number(val.price * val.quantidade)
            let qtd = Number(val.quantidade)
            gridCarrinho.innerHTML += `
            <div class="spans-cart">
                <span class = "nomeElemento">${val.nome}</span>
                <span class = "qtdElemento">Qtd: 
                    <button type="button" class="minus">-</button> 
                    <span class="qtdCart">${qtd}</span> 
                    <button type="button" class="plus">+</button>
                </span>
                <span class = "price">Preço: R$ ${replacePontoVirgula(valor.toFixed(2))}</span>
            </div>
        `

        counter.innerHTML++
        totalBox.innerHTML = `
            <span class="total">Total:</span>
            <span></span>
            <span id="valor"> Valor R$${replacePontoVirgula(price.toFixed(2))}</span>
        `
        }
    })
    enviarPedido.addEventListener('click', (e) => {
        e.preventDefault()      
        location.href = `https://wa.me/5513999998888?text=Olá%20Gostaria%20de%20encomendar:${
            items.map(el => {
                let nome = el.nome
                let qtd  = String(el.quantidade)
                let precoUnit = el.price * el.quantidade
                if(el.quantidade > 0){
                    return `%0a%0a*Nome:* ${nome}%20` + `Quantidade: ${qtd}%20` +  `Preço: R$${precoUnit.toFixed(2)}`
                }
            })
        }%0a%0aCom%20*TOTAL*%20de%20*R$${replacePontoVirgula(price.toFixed(2))}*`
    })
}   

function pegaAtributo(){
    const links = document.querySelectorAll('.produtoAdd')
    for(var i = 0; i < links.length; i++){
        links[i].addEventListener("click",function(event){
            event.preventDefault()
            appearCart = document.querySelector('#appearCart')
            appearCart.style.display = "block"
            let key = this.getAttribute('key')
            items[key].quantidade++
            atualizarCarrinho()
        })
    }
}

function ativo(){
    const modal = document.querySelector('.modal')
    const carrinhoCompra = document.querySelector('.carrinho-compra')

    carrinhoCompra.addEventListener('click', () => {
        if(modal.classList.contains('oculto')){
            modal.classList.add("ativo")
            modal.classList.remove("oculto")
        }else{
            modal.classList.remove("ativo")
            modal.classList.add("oculto")
        }
        
    })
}

function closeModal(){
    const modal = document.querySelector(".modal")
    const continuarComprando = document.querySelector('#continuarComprando')

    continuarComprando.addEventListener('click', () => {
        modal.classList.remove("ativo")
        modal.classList.add('oculto')
    })
    
}

inicializarLoja()
pegaAtributo()
ativo()
closeModal()



 

