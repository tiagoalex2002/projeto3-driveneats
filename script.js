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

