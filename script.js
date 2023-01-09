function primeiraescolha(opcaoSelecionada, idCheck) {
    const botaoAnterior = document.querySelector('.selecionado-f1');
    if (botaoAnterior !== null) {
        botaoAnterior.classList.remove('selecionado-f1');
    }
    const botaoSelecionado = document.querySelector(opcaoSelecionada);
    botaoSelecionado.classList.add('selecionado-f1');
    const checkAnterior = document.querySelector('.checkSelecionado-f1')
    if (checkAnterior !== null) {
        checkAnterior.classList.remove('checkSelecionado-f1')
    }
    const checkSelecionado = document.querySelector(idCheck);
    checkSelecionado.classList.add('checkSelecionado-f1');
    enableButton();
}
function segundaescolha(opcaoSelecionada, idCheck) {
    const botaoAnterior = document.querySelector('.selecionado-f2');
    if (botaoAnterior !== null) {
        botaoAnterior.classList.remove('selecionado-f2');
    }
    const botaoSelecionado = document.querySelector(opcaoSelecionada);
    botaoSelecionado.classList.add('selecionado-f2');
    const checkAnterior = document.querySelector('.checkSelecionado-f2')
    if (checkAnterior !== null) {
        checkAnterior.classList.remove('checkSelecionado-f2')
    }
    const checkSelecionado = document.querySelector(idCheck);
    checkSelecionado.classList.add('checkSelecionado-f2');
    enableButton();
}
function terceiraescolha(opcaoSelecionada, idCheck) {
    const botaoAnterior = document.querySelector('.selecionado-f3');
    if (botaoAnterior !== null) {
        botaoAnterior.classList.remove('selecionado-f3');
    }
    const botaoSelecionado = document.querySelector(opcaoSelecionada);
    botaoSelecionado.classList.add('selecionado-f3');
    const checkAnterior = document.querySelector('.checkSelecionado-f3')
    if (checkAnterior !== null) {
        checkAnterior.classList.remove('checkSelecionado-f3')
    }
    const checkSelecionado = document.querySelector(idCheck);
    checkSelecionado.classList.add('checkSelecionado-f3');
    enableButton();
}
function enableButton() {
    const selecaoum = document.querySelector('.selecionado-f1');
    const selecaodois = document.querySelector('.selecionado-f2');
    const selecaotres = document.querySelector('.selecionado-f3');
    if (selecaoum !== null && selecaodois !== null && selecaotres !== null) {
        document.querySelector('.botao-footer').disabled = false;
        const botao = document.querySelector('.botao-footer');
        botao.classList.add('verde');
        botao.textContent = "Fechar pedido"
    }
}
function confirmarpedido() {
    const precoum = document.querySelector('.selecionado-f1 .preconumerico');
    const precodois = document.querySelector('.selecionado-f2 .preconumerico');
    const precotres = document.querySelector('.selecionado-f3 .preconumerico');
    const precorealum = Number(precoum.textContent);
    const precorealdois = Number(precodois.textContent);
    const precorealtres = Number(precotres.textContent);
    const total = precorealdois + precorealtres + precorealum;
    const totalreal = total.toFixed(2);
    var s = totalreal.toString();//27.70
    var index = 2;
    s = s.substring(0, index) + ',' + s.substring(index + 1);
    const comidaum = document.querySelector('.selecionado-f1 .nome-da-comida').innerHTML;
    const comidadois = document.querySelector('.selecionado-f2 .nome-da-comida').innerHTML;
    const comidatres = document.querySelector('.selecionado-f3 .nome-da-comida').innerHTML;
    const confirmarPrato = document.querySelector(".pedido-1-1");
    confirmarPrato.textContent = comidaum;
    const confirmarBebida = document.querySelector(".pedido-2-2");
    confirmarBebida.textContent = comidadois;
    const confirmarSobremesa = document.querySelector(".pedido-3-1");
    confirmarSobremesa.textContent = comidatres;
    document.querySelector('.pedido-1-2').innerHTML = document.querySelector('.selecionado-f1 .preco').innerHTML;
    document.querySelector('.pedido-2-2').innerHTML = document.querySelector('.selecionado-f2 .preco').innerHTML;
    document.querySelector('.pedido-3-2').innerHTML = document.querySelector('.selecionado-f3 .preco').innerHTML;
    document.querySelector('.pedidototal-2').innerHTML = "R$ " + s;
    document.querySelector('.confirmacao').classList.add('aparecer');
    const fundobranco = document.querySelector('.opaco');
    fundobranco.classList.add('aparecerdois');
    console.log(fundobranco);
}
function pedido() {
    const precoum = document.querySelector('.selecionado-f1 .preconumerico');
    const precodois = document.querySelector('.selecionado-f2 .preconumerico');
    const precotres = document.querySelector('.selecionado-f3 .preconumerico');
    const precorealum = Number(precoum.textContent);
    const precorealdois = Number(precodois.textContent);
    const precorealtres = Number(precotres.textContent);
    const total = precorealdois + precorealtres + precorealum;
    const totalreal = total.toFixed(2);
    var s = totalreal.toString();//27.70
    var index = 2;
    s = s.substring(0, index) + ',' + s.substring(index + 1);
    console.log(s);
    const comidaum = document.querySelector('.selecionado-f1 .nome-da-comida');
    const comidadois = document.querySelector('.selecionado-f2 .nome-da-comida');
    const comidatres = document.querySelector('.selecionado-f3 .nome-da-comida');
    const nome = prompt("Digite seu nome");
    const endereco = prompt("Digite seu endereço");
    const nomeurl = nome.replaceAll(' ', '+');
    const enderecourl = endereco.replaceAll(' ', '+');
    let textoComidaUm = condicaoum(comidaum);
    let textoComidaDois = condicaodois(comidadois);
    let textoComidaTres = condicaotres(comidatres);
    console.log(textoComidaUm);
    let link = "https://wa.me/5518999999999?text=Ol%c3%a1%2c+gostaria+de+fazer+o+pedido%3a%0d%0a-+Prato%3a+" + textoComidaUm + "%0d%0a-+Bebida%3a+" + textoComidaDois + "%0d%0a-+Sobremesa%3a+" + textoComidaTres + "%0d%0aTotal%3a+R%24+" + s + "%0A%0ANome%3A%20" + nomeurl + "%0AEndere%C3%A7o%3A%20" + enderecourl;
    console.log(link);
    document.querySelector('a').href = link;
}
function condicaoum(comidaum) {
    let textoComidaUm = 0;
    if (comidaum.textContent === "Frango Yin Yang") {
        textoComidaUm = "Frango+Yin+Yang";
        return textoComidaUm;
    }
    else if (comidaum.textContent === "Pizza de Pepperoni.") {
        textoComidaUm = "Pizza+de+Pepperoni";
        return textoComidaUm;
    }
    else if (comidaum.textContent === "Macarrão Carbonara") {
        textoComidaUm = "Macarrão+Carbonara";
        return textoComidaUm;
    }
    console.log(textoComidaUm);
}
function condicaodois(comidadois) {
    if (comidadois.textContent === "Coquinha gelada") {
        let textoComidaDois = "Coquinha+gelada";
        return (textoComidaDois);
    }
    else if (comidadois.textContent === "Sucos Naturais") {
        let textoComidaDois = "Sucos+Naturais";
        return (textoComidaDois);
    }
    else if (comidadois.textContent === "Heineken") {
        let textoComidaDois = "Heineken";
        return (textoComidaDois);
    }
}
function condicaotres(comidatres) {
    if (comidatres.textContent === "Pudim") {
        let textoComidaTres = "Pudim";
        return textoComidaTres;
    }
    else if (comidatres.textContent === "Petit Gateau") {
        let textoComidaTres = "Petit+Gateau";
        return textoComidaTres;
    }
    else if (comidatres.textContent === "Dindin") {
        let textoComidaTres = "Dindin";
        return textoComidaTres;
    }
}
function cancelar() {
    document.querySelector(".confirmacao").classList.remove("aparecer");
    document.querySelector(".opaco").classList.remove("aparecerdois");
}