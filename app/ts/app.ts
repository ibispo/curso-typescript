import { NegociacaoController } from './controllers/NegociacaoController';

const negCont = new NegociacaoController();

// Usando JQuery
$('.form').submit(negCont.adicionar.bind(negCont));
$('#btnImport').click(negCont.importarDados.bind(negCont));
$('#btnCEP').click(negCont.buscarCEP.bind(negCont));

/*

// deixarmos explícitos que a função pode retornar boolean ou null
function minhaFuncao(flag: boolean): boolean | null {
    if (flag) 
        return null;
    return true;
}

console.log( `Retorno da minha função: ${minhaFuncao(true)}`) ;

*/