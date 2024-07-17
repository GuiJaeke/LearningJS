function fazli() {
    var criaul = document.createElement('ul');
    var pegalista = document.getElementsByTagName('ul')
    var insira = document.getElementById('bah').addEventListener('click', function () {
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

// espaço //
var body1 = document.querySelector('body')
var res = document.querySelector('.res')
var number = []
var num1 = document.getElementById('1').addEventListener('click', function(){
    number.push(1),
    cl(number)
}
)
var num2 = document.getElementById('2').addEventListener('click', function(){
    number.push(2)

    cl(number)
}
)
var num3 = document.getElementById('3').addEventListener('click', function(){
    number.push(3),
    cl(number)
}
)
var num4 = document.getElementById('4').addEventListener('click', function(){
    number.push(4)

    cl(number)
}
)
var num5 = document.getElementById('5').addEventListener('click', function(){
    number.push(5),
    cl(number)
}
)
var num6 = document.getElementById('6').addEventListener('click', function(){
    number.push(6)

    cl(number)
}
)
var num7 = document.getElementById('7').addEventListener('click', function(){
    number.push(7),
    cl(number)
}
)
var num8 = document.getElementById('8').addEventListener('click', function(){
    number.push(8)

    cl(number)
}
)
var num9 = document.getElementById('9').addEventListener('click', function(){
    number.push(9),
    cl(number)
}
)
var num0 = document.getElementById('0').addEventListener('click', function(){
    number.push(0)

    cl(number)
}
)
cl(number)
var soma = document.getElementById('soma').addEventListener('click', function (){
    let sum = document.createElement('p')
    let print = document.createTextNode(number[0] + number[1])
    cl(print)
    
    sum.appendChild(print)
    res.appendChild(sum)
})
var sub = document.getElementById('sub').addEventListener('click', function (){
    let sum = document.createElement('p')
    let print = document.createTextNode(number[0] - number[1])
    cl(print)
    
    sum.appendChild(print)
    res.appendChild(sum)
})
var mult = document.getElementById('mult').addEventListener('click', function (){
    let sum = document.createElement('p')
    let print = document.createTextNode(number[0] * number[1])
    cl(print)
    
    sum.appendChild(print)
    res.appendChild(sum)
})
var divis = document.getElementById('divis').addEventListener('click', function (){
    let sum = document.createElement('p')
    let print = document.createTextNode(number[0] / number[1])
    cl(print)
    
    sum.appendChild(print)
    res.appendChild(sum)
})



