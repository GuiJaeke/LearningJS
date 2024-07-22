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
var res = document.querySelector('.res')
var sum = document.createElement('p')
var conta 
var print
function calculdadora() {
    var number = []
    const visor = document.createElement('p')
    var textVisor = document.createTextNode("0")
    
    visor.appendChild(textVisor)
    res.appendChild(visor)
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


var soma = document.getElementById('soma').addEventListener('click', function () {
    let primnum = number.join('')
    cl(primnum)
    
    print = document.createTextNode(primnum)
    res.removeChild(visor)
    sum.appendChild(print)
    res.appendChild(sum)

    var number2 = []
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
    resul = document.getElementById('resul').addEventListener('click', function () {
        let segnum = number2.join('')
        cl(segnum)
        conta = parseInt(primnum) + parseInt(segnum)
        sum.removeChild(print)
        print = document.createTextNode(conta)
        sum.appendChild(print)
        res.appendChild(sum)
        number = undefined
        number2 = undefined
        return
    })
}

)
var sub = document.getElementById('sub').addEventListener('click', function () {
    primnum = number.join('')
    cl(primnum)
    
    print = document.createTextNode(primnum)
    res.removeChild(visor)
    sum.appendChild(print)
    res.appendChild(sum)

    var number2 = []
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
    resul = document.getElementById('resul').addEventListener('click', function () {
        let segnum = number2.join('')
        cl(segnum)
        let conta = parseInt(primnum) - parseInt(segnum)
        sum.removeChild(print)
        print = document.createTextNode(conta)
        sum.appendChild(print)
        res.appendChild(sum)
        number = undefined
        number2 = undefined
        return
    })
}
)
var mult = document.getElementById('mult').addEventListener('click', function () {
    primnum = number.join('')
    cl(primnum)
    
    print = document.createTextNode(primnum)
    res.removeChild(visor)
    sum.appendChild(print)
    res.appendChild(sum)

    var number2 = []
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
    resul = document.getElementById('resul').addEventListener('click', function () {
        var segnum = number2.join('')
        cl(segnum)
        let conta = parseInt(primnum) * parseInt(segnum)
        sum.removeChild(print)
        print = document.createTextNode(conta)
        sum.appendChild(print)
        res.appendChild(sum)
        number = undefined
        number2 = undefined
        return
    })
})
var divis = document.getElementById('divis').addEventListener('click', function () {
    primnum = number.join('')
    cl(primnum)
    
    print = document.createTextNode(primnum)
    res.removeChild(visor)
    sum.appendChild(print)
    res.appendChild(sum)

    var number2 = []
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
    resul = document.getElementById('resul').addEventListener('click', function () {
        let segnum = number2.join('')
        cl(segnum)
        let conta = parseInt(primnum) / parseInt(segnum)
        sum.removeChild(print)
        print = document.createTextNode(conta.toFixed(2))
        sum.appendChild(print)
        res.appendChild(sum)
        number = undefined
        number2 = undefined
        return   
    })

})
}
liga = 0
var reset = document.getElementById('limp').addEventListener('click', function () {
    if (liga == 0) {
        alert('Ligue a calculadora')
    }
    else {
        res.removeChild(sum)
        sum.removeChild(print)
        number2 = undefined
        calculdadora()
        
    }

})
var LIGAR = document.getElementById('ligar').addEventListener('click', function () {
    if (liga != 0) {
        alert("para fazer outra conta, aperte em RESET")
    }
    else{
        calculdadora()
        liga++
    }
})





