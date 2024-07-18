function fazli() {
    var criaul = document.createElement('ul');
    var pegalista = document.getElementsByTagName('ul')
    var insira = document.getElementById('bah').addEventListener('click', function (event) {
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
    var enter = document.getElementById('bah').addEventListener('keydown', function (event) {
        if (event.key === enter){
        var criali = document.createElement('li')
        var texto = document.querySelector('#inputtxt')
        gettxt = document.createTextNode(texto.value)
        if (!texto.value) {
            alert("Insira um texto!")
        }
        else {
            criali.appendChild(gettxt)
            pegalista[0].appendChild(criali)
        }}



    })
}

fazli()

// espaço //

var res = document.querySelector('.res')
var number = []
function numeros() {
    var num1 = document.getElementById('1').addEventListener('click', function () {
        number.push(1),
            cl(number)
    }
    )
    var num2 = document.getElementById('2').addEventListener('click', function () {
        number.push(2)

        cl(number)
    }
    )
    var num3 = document.getElementById('3').addEventListener('click', function () {
        number.push(3),
            cl(number)
    }
    )
    var num4 = document.getElementById('4').addEventListener('click', function () {
        number.push(4)

        cl(number)
    }
    )
    var num5 = document.getElementById('5').addEventListener('click', function () {
        number.push(5),
            cl(number)
    }
    )
    var num6 = document.getElementById('6').addEventListener('click', function () {
        number.push(6)

        cl(number)
    }
    )
    var num7 = document.getElementById('7').addEventListener('click', function () {
        number.push(7),
            cl(number)
    }
    )
    var num8 = document.getElementById('8').addEventListener('click', function () {
        number.push(8)

        cl(number)
    }
    )
    var num9 = document.getElementById('9').addEventListener('click', function () {
        number.push(9),
            cl(number)
    }
    )
    var num0 = document.getElementById('0').addEventListener('click', function () {
        number.push(0)

        cl(number)
    }
    )
}
numeros()
cl(number)
var soma = document.getElementById('soma').addEventListener('click', function () {
    primnum = number.join('')
    cl(primnum)
    let sum = document.createElement('p')
    var print = document.createTextNode(primnum)
    sum.appendChild(print)
    res.appendChild(sum)

    let number2 = []
    var num1 = document.getElementById('1').addEventListener('click', function () {
        number2.push(1),
            cl(number2)
    }
    )
    var num2 = document.getElementById('2').addEventListener('click', function () {
        number2.push(2)

        cl(number2)
    }
    )
    var num3 = document.getElementById('3').addEventListener('click', function () {
        number2.push(3),
            cl(number2)
    }
    )
    var num4 = document.getElementById('4').addEventListener('click', function () {
        number2.push(4)

        cl(number2)
    }
    )
    var num5 = document.getElementById('5').addEventListener('click', function () {
        number2.push(5),
            cl(number2)
    }
    )
    var num6 = document.getElementById('6').addEventListener('click', function () {
        number2.push(6)

        cl(number2)
    }
    )
    var num7 = document.getElementById('7').addEventListener('click', function () {
        number2.push(7),
            cl(number2)
    }
    )
    var num8 = document.getElementById('8').addEventListener('click', function () {
        number2.push(8)

        cl(number2)
    }
    )
    var num9 = document.getElementById('9').addEventListener('click', function () {
        number2.push(9),
            cl(number2)
    }
    )
    var num0 = document.getElementById('0').addEventListener('click', function () {
        number2.push(0)
        cl(number2)
    }
    )
    resul = document.getElementById('resul').addEventListener('click', function() {
        let segnum = number2.join('')
        cl(segnum)
        let conta = parseInt(primnum) + parseInt (segnum)
        sum.removeChild(print)
        print = document.createTextNode(conta)
        sum.appendChild(print)
        res.appendChild(sum)    
    })
}
    
)
var sub = document.getElementById('sub').addEventListener('click', function () {
    primnum = number.join('')
    cl(primnum)
    let sum = document.createElement('p')
    var print = document.createTextNode(primnum)
    sum.appendChild(print)
    res.appendChild(sum)
    
    let number2 = []
    var num1 = document.getElementById('1').addEventListener('click', function () {
        number2.push(1),
            cl(number2)
    }
    )
    var num2 = document.getElementById('2').addEventListener('click', function () {
        number2.push(2)

        cl(number2)
    }
    )
    var num3 = document.getElementById('3').addEventListener('click', function () {
        number2.push(3),
            cl(number2)
    }
    )
    var num4 = document.getElementById('4').addEventListener('click', function () {
        number2.push(4)

        cl(number2)
    }
    )
    var num5 = document.getElementById('5').addEventListener('click', function () {
        number2.push(5),
            cl(number2)
    }
    )
    var num6 = document.getElementById('6').addEventListener('click', function () {
        number2.push(6)

        cl(number2)
    }
    )
    var num7 = document.getElementById('7').addEventListener('click', function () {
        number2.push(7),
            cl(number2)
    }
    )
    var num8 = document.getElementById('8').addEventListener('click', function () {
        number2.push(8)

        cl(number2)
    }
    )
    var num9 = document.getElementById('9').addEventListener('click', function () {
        number2.push(9),
            cl(number2)
    }
    )
    var num0 = document.getElementById('0').addEventListener('click', function () {
        number2.push(0)
        cl(number2)
    }
    )
    resul = document.getElementById('resul').addEventListener('click', function() {
        let segnum = number2.join('')
        cl(segnum)
        let conta = parseInt(primnum) - parseInt (segnum)
        number = []
        number2 = []
        sum.removeChild(print)
        print = document.createTextNode(conta)
        sum.appendChild(print)
        res.appendChild(sum)    
    })
}
)
var mult = document.getElementById('mult').addEventListener('click', function () {
    primnum = number.join('')
    cl(primnum)
    let sum = document.createElement('p')
    var print = document.createTextNode(primnum)
    sum.appendChild(print)
    res.appendChild(sum)
    
    let number2 = []
    var num1 = document.getElementById('1').addEventListener('click', function () {
        number2.push(1),
            cl(number2)
    }
    )
    var num2 = document.getElementById('2').addEventListener('click', function () {
        number2.push(2)

        cl(number2)
    }
    )
    var num3 = document.getElementById('3').addEventListener('click', function () {
        number2.push(3),
            cl(number2)
    }
    )
    var num4 = document.getElementById('4').addEventListener('click', function () {
        number2.push(4)

        cl(number2)
    }
    )
    var num5 = document.getElementById('5').addEventListener('click', function () {
        number2.push(5),
            cl(number2)
    }
    )
    var num6 = document.getElementById('6').addEventListener('click', function () {
        number2.push(6)

        cl(number2)
    }
    )
    var num7 = document.getElementById('7').addEventListener('click', function () {
        number2.push(7),
            cl(number2)
    }
    )
    var num8 = document.getElementById('8').addEventListener('click', function () {
        number2.push(8)

        cl(number2)
    }
    )
    var num9 = document.getElementById('9').addEventListener('click', function () {
        number2.push(9),
            cl(number2)
    }
    )
    var num0 = document.getElementById('0').addEventListener('click', function () {
        number2.push(0)
        cl(number2)
    }
    )
    resul = document.getElementById('resul').addEventListener('click', function() {
        let segnum = number2.join('')
        cl(segnum)
        let conta = parseInt(primnum) * parseInt (segnum)
        sum.removeChild(print)
        print = document.createTextNode(conta)
        sum.appendChild(print)
        res.appendChild(sum)    
    })
})
var divis = document.getElementById('divis').addEventListener('click', function () {
    primnum = number.join('')
    cl(primnum)
    let sum = document.createElement('p')
    var print = document.createTextNode(primnum)
    sum.appendChild(print)
    res.appendChild(sum)
    
    let number2 = []
    var num1 = document.getElementById('1').addEventListener('click', function () {
        number2.push(1),
            cl(number2)
    }
    )
    var num2 = document.getElementById('2').addEventListener('click', function () {
        number2.push(2)

        cl(number2)
    }
    )
    var num3 = document.getElementById('3').addEventListener('click', function () {
        number2.push(3),
            cl(number2)
    }
    )
    var num4 = document.getElementById('4').addEventListener('click', function () {
        number2.push(4)

        cl(number2)
    }
    )
    var num5 = document.getElementById('5').addEventListener('click', function () {
        number2.push(5),
            cl(number2)
    }
    )
    var num6 = document.getElementById('6').addEventListener('click', function () {
        number2.push(6)

        cl(number2)
    }
    )
    var num7 = document.getElementById('7').addEventListener('click', function () {
        number2.push(7),
            cl(number2)
    }
    )
    var num8 = document.getElementById('8').addEventListener('click', function () {
        number2.push(8)

        cl(number2)
    }
    )
    var num9 = document.getElementById('9').addEventListener('click', function () {
        number2.push(9),
            cl(number2)
    }
    )
    var num0 = document.getElementById('0').addEventListener('click', function () {
        number2.push(0)
        cl(number2)
    }
    )
    resul = document.getElementById('resul').addEventListener('click', function() {
        let segnum = number2.join('')
        cl(segnum)
        let conta = parseInt(primnum) / parseInt (segnum)
        sum.removeChild(print)
        print = document.createTextNode(conta)
        sum.appendChild(print)
        res.appendChild(sum)    
})
})
x = 0
// var gordo = ["GORDO ",]
// while (x < 10) {
//     gordo.push(" GORDO")
//     alert(gordo)
//     x++
// }