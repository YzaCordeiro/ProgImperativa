var pipoca = 1;
var macarrao = 2;
var carne = 3;
var feijao = 4;
var brigadeiro = 5;

console.log ("Bem vindo ao SuperMicro!")
console.log ("Menu: \n 1 - Pipoca \n 2 - Macarrão \n 3 - carne \n 4 - Feijão \n 5 - Brigadeiro \n");

function usuario (opcao){
    var usuario = opcao;
    return usuario;
}

var valor = usuario (4);
console.log( "==> " + valor);
let tempo = usuario(0);
switch (valor){

    case 1: console.log ("Informe o tempo de preparo \n *Tempo recomendado: 10");

     tempo = usuario(24);
console.log("==> " + tempo);

if (tempo <10){ console.log("Tempo insuficiente!")}
else if (tempo >20 && tempo <30 ){console.log("A comida queimou!");}
else if (tempo >=30){ console.log ("KABUM")}
else{ console.log("Prato Pronto, bom apetite!!!");}
        break;

        case 2: console.log ("Informe o tempo de preparo \n *Tempo recomendado: 8");

        tempo = usuario(24);
console.log("==> " + tempo)

if (tempo <8){ console.log("Tempo insuficiente!")}
else if (tempo >16 && tempo <24 ){console.log("A comida queimou!");}
else if (tempo >23){ console.log ("KABUM")}
else{ console.log("Prato Pronto, bom apetite!!!");}
            break;

            case 3: console.log ("Informe o tempo de preparo \n *Tempo recomendado: 15");

            tempo = usuario(44);
console.log("==> " + tempo)

if (tempo <15){ console.log("Tempo insuficiente!")}
else if (tempo >30 && tempo <45 ){console.log("A comida queimou!");}
else if (tempo >44){ console.log ("KABUM")}
else{ console.log("Prato Pronto, bom apetite!!!");}
                break;

                case 4: console.log ("Insira sua opção: \n*Tempo recomendado: 12");

                tempo = usuario(36);
console.log("==> " + tempo)

if (tempo <12){ console.log("Tempo insuficiente!")}
else if (tempo >24 && tempo <36){console.log("A comida queimou!");}
else if (tempo >35){ console.log ("KABUM")}
else{ console.log("Prato Pronto, bom apetite!!!");}
                    break;

                    case 5: console.log ("Informe o tempo de preparo \n *Tempo recomendado: 8");

tempo = usuario(24);

console.log("==> " + tempo)
if (tempo <8){ console.log("Tempo insuficiente!")}
else if (tempo >16 && tempo <24){console.log("A comida queimou!");}
else if (tempo >23){ console.log ("KABUM")}
else{ console.log("Prato Pronto, bom apetite!!!");}
                        break;
                        default: console.log ("\nPrato Inexistente");
    
}
