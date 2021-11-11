var pipoca = 1;
var macarrao = 2;
var carne = 3;
var feijao = 4;
var brigadeiro = 5;

console.log ("Bem vindo ao SuperMicro!")
console.log ("Menu: \n 1 - Pipoca \n 2 - Macarrão \n 3 - carne \n 4 - Feijão \n 5 - Brigadeiro \n");

// var opcao = prompt ("Insira sua opção")
//var opcao = require('prompt-sync')();
var opcao = 11
if (opcao == 1){
    console.log ("Informe o tempo de preparo \n *Tempo recomendado: 10");
}
else if (opcao == 2){
    console.log ("Informe o tempo de preparo \n *Tempo recomendado: 8");

} else if (opcao == 3){
    console.log ("Informe o tempo de preparo \n *Tempo recomendado: 15");

} else if (opcao == 4){
    console.log ("Informe o tempo de preparo \n *Tempo recomendado: 12");

}else if (opcao == 5) {
    console.log ("Informe o tempo de preparo \n *Tempo recomendado: 8");

} else {
    console.log ("\nPrato Inexistente")
}
var tempo;