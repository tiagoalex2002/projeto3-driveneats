function enableButton() {
    const primeiraselecao = document.querySelector('.selecionado-f1');
    const segundaselecao = document.querySelector('.selecionado-f2');
    const terceiraselecao = document.querySelector('.selecionado-f3');
    if (primeiraselecao !== null && segundaselecao !== null && terceiraselecao !== null) {
        document.querySelector('.botao-footer').disabled = false;
        const botao = document.querySelector('.botao-footer');
        botao.classList.add('verde');
        botao.textContent = "Fechar pedido"
    }
}




function primeiraescolha(opcaoSelecionada, idCheck) {
    const Anterior = document.querySelector('.selecionado-f1');
    if (Anterior !== null) {
        Anterior.classList.remove('selecionado-f1');
    }
    const Selecionado = document.querySelector(opcaoSelecionada);
    Selecionado.classList.add('selecionado-f1');
    const checkAnterior = document.querySelector('.checkSelecionado-f1')
    if (checkAnterior !== null) {
        checkAnterior.classList.remove('checkSelecionado-f1')
    }
    const checkSelecionado = document.querySelector(idCheck);
    checkSelecionado.classList.add('checkSelecionado-f1');
    enableButton();
}

function segundaescolha(opcaoSelecionada, idCheck) {
    const Anterior = document.querySelector('.selecionado-f2');
    if (Anterior !== null) {
        Anterior.classList.remove('selecionado-f2');
    }
    const Selecionado = document.querySelector(opcaoSelecionada);
    Selecionado.classList.add('selecionado-f2');
    const checkAnterior = document.querySelector('.checkSelecionado-f2')
    if (checkAnterior !== null) {
        checkAnterior.classList.remove('checkSelecionado-f2')
    }
    const checkSelecionado = document.querySelector(idCheck);
    checkSelecionado.classList.add('checkSelecionado-f2');
    enableButton();
}

function terceiraescolha(opcaoSelecionada, idCheck) {
    const Anterior = document.querySelector('.selecionado-f3');
    if (Anterior !== null) {
        Anterior.classList.remove('selecionado-f3');
    }
    const Selecionado = document.querySelector(opcaoSelecionada);
    Selecionado.classList.add('selecionado-f3');
    const checkAnterior = document.querySelector('.checkSelecionado-f3')
    if (checkAnterior !== null) {
        checkAnterior.classList.remove('checkSelecionado-f3')
    }
    const checkSelecionado = document.querySelector(idCheck);
    checkSelecionado.classList.add('checkSelecionado-f3');
    enableButton();
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
    const confirmarBebida = document.querySelector(".pedido-2-1");
    confirmarBebida.textContent = comidadois;
    const confirmarSobremesa = document.querySelector(".pedido-3-1");
    confirmarSobremesa.textContent = comidatres;
    document.querySelector('.pedido-1-2').innerHTML = document.querySelector('.selecionado-f1 .preco').innerHTML;
    document.querySelector('.pedido-2-2').innerHTML = document.querySelector('.selecionado-f2 .preco').innerHTML;
    document.querySelector('.pedido-3-2').innerHTML = document.querySelector('.selecionado-f3 .preco').innerHTML;
    document.querySelector('.pedidototal-2').innerHTML = "R$ " + s;
    document.querySelector('.confirmar').classList.add('aparecer');
    const fundobranco = document.querySelector('.opaco');
    fundobranco.classList.add('aparecerdois');
    console.log(fundobranco);
}



