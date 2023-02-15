var readline = require('readline');
var entradaDados = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});
entradaDados.question("Digite primeiro numero \n", function(primeironumero) {
    let numeroprimeiro = primeironumero;
    entradaDados.question("digite segund numero \n",function(segundonumero) {
        let numerosegundo = segundonumero
        entradaDados.question("escolha entre \n impar \n par \n ambos \n", function(imparpar){
            let selecao = imparpar
        })

    })

})