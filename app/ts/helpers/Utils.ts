import { Mostravel } from "../models/index";

export function mostrarConsole(...mostraList: Mostravel[]) {
    mostraList.forEach(mostra => mostra.toText());
}


/*
    Considerações sobre o uso de Union Types Type Guards (typeof)
    -------------------------------------------------
    Apesar de ser um recurso da linguagem, essa estratégia remete à programação 
    procedural pois envolve uma sucessão de if's para detectar o tipo dos elementos. 
    É por este motivo que não foi utilizado em nosso projeto e demos 
    preferência ao polimorfismo.
*/

type myTok = string | number; // Criação de "alias"
function procToken(tok: myTok) {
    // muda o dígico 2 por X
    if ( typeof(tok) === 'string' ) {
        return tok.replace(/2/g, 'X');  
    } else {
        // toFixed só existe em number
        return tok.toFixed().replace(/2/g, 'X');
    }
}

/* Teste
   -----
const xxx = procToken('1234');
console.log(xxx);
const yyy = procToken(1234);
console.log(yyy);
*/
