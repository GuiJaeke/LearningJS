function fazli() {
    var criaul = document.createElement('ul');
    var pegalista = document.getElementsByTagName('ul')
    var insira = document.getElementById('1').addEventListener('click', function () {
        var criali = document.createElement('li')
        var texto = document.querySelector('#inputtxt')
        gettxt = document.createTextNode(texto.value)
        if (!texto.value) {
            alert("Insira um texto!")
        }
        else {
            criali.appendChild(gettxt)
            pegalista[0].appendChild(criali)
        }



    })
}

fazli()

