var parImpar = function(primeiroNumero, segundoNumero) {
    let valor1 = Number(primeiroNumero)
    let valor2 = Number(segundoNumero)
    let cont = 0;
    for (cont = valor1; cont < valor2; ++cont) {
        if (cont % 2 == 0) {
            console.log(cont + " é par")

        } else {
            console.log(+cont + " é impar")
        }
    }

    // console.log(segundoNumero - primeiroNumero)

    if (cont != undefined) {
        return cont

    } else {
        console.log("Houve um erro")
    }


}

var impar = function(primeiroNumero, segundoNumero) {
    let valor1 = Number(primeiroNumero)
    let valor2 = Number(segundoNumero)
    let cont = 0;
    let status = true;
    for (cont = valor1; cont < valor2; cont++) {
        if (cont % 2 != 0) {
            //  console.log(cont + " é impar")
            console.log(cont)

        }
    }
    // if (cont != undefined)
    //     return cont
    // else
    //     console.log("Houve um erro")
}
var par = function(primeiroNumero, segundoNumero) {
    let valor1 = Number(primeiroNumero)
    let valor2 = Number(segundoNumero)
    let cont = 0;
    for (cont = valor1; cont < valor2; cont++) {
        if (cont % 2 == 0) {
            console.log(cont)
        }
    }
    if (cont != undefined) {
        return cont

    } else {
        console.log("Houve um erro")
    }

}



//par (20,20)
//impar (20,30)
//parImpar(20,50)
module.exports = {
    parImpar,
    impar,
    par
}