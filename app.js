var jogo = require('./modulo/selecionador.js')

var readline = require('readline');
const { isString } = require('util');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
entradaDados.question("Digite primeiro numero \n", function(primeironumero) {
    let numeroprimeiro = Number(primeironumero);
    if (numeroprimeiro == '') {
        console.log("preencha essa questão")
        process.exit()
    }
    if (isNaN(numeroprimeiro)) {
        console.log("Só é permitido números")
        process.exit()
    }
    entradaDados.question("digite segund numero \n", function(segundonumero) {
        let numerosegundo = Number(segundonumero)
        if (numerosegundo == '') {
            console.log("preencha essa questão")
            process.exit()
        }
        if (isNaN(numerosegundo)) {
            console.log("Só é permitido números")
            process.exit()
        }
        entradaDados.question("escolha entre \n 1) impar \n 2) par \n 3) ambos \n", function(imparpar) {
            let selecao = imparpar
                //  let impar = impar(numeroprimeiro, numerosegundo)
                //  let par = par(numeroprimeiro, numerosegundo)
                //  let ambos = parImpar(numeroprimeiro, numerosegundo)
            if (!isNaN(selecao)) {
                console.log("preencha esse campo com letras")
            } else {

                if (selecao == 'impar') {
                    console.log(jogo.impar(numeroprimeiro, numerosegundo))
                    process.exit()

                } else if (selecao == 'par') {
                    console.log(jogo.par(numeroprimeiro, numerosegundo))
                    process.exit()

                } else {
                    console.log(jogo.parImpar(numeroprimeiro, numerosegundo))
                    process.exit()
                }
            }
        })

    })

})