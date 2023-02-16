var readline = require('readline');
var entradaDados = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});
entradaDados.question("Digite primeiro numero \n", function(primeironumero) {
    let numeroprimeiro = Number(primeironumero);
    entradaDados.question("digite segund numero \n",function(segundonumero) {
        let numerosegundo = Number(segundonumero)
        entradaDados.question("escolha entre \n impar \n par \n ambos \n", function(imparpar){
            let selecao = imparpar

            let impar = impar(numeroprimeiro, numerosegundo)
            let par = par(numeroprimeiro, numerosegundo)
            let ambos = imparpar(numeroprimeiro, numerosegundo)

            if (selecao == 'impar') {
              console.log(impar)
               
            }else if (selecao == 'par') {
                console.log(par)
               
            } else {
                console.log(ambos)
              
            }
        })

    })

})