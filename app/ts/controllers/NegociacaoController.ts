import { NegociacaoView, MensagemView } from '../views/index';
import { Negociacao, NegociacaoLista } from '../models/index';
import { domInject, meuDecoratorDeClasse, throttle } from '../helpers/decorators/index';
import { NegociacaoParcial } from '../models/index';
import { NegociacaoService, HandlerFunction } from '../services/index';
import { mostrarConsole } from '../helpers/index';

let timerExec = 0;

@meuDecoratorDeClasse()
export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacaoLista = new NegociacaoLista();

    private _negociacaoView = new NegociacaoView('#tabNeg');
    private _mensagemView = new MensagemView("#msg");

    private _negociacaoService = new NegociacaoService();

    // Lazy DOM --- Carregamento "preguiçoso" dos elementos do DOM

    constructor() {
        this._negociacaoView.update( this._negociacaoLista );
    }

    // Decorator "experimental" ES5
    // @logTempoExec()
    // @throttle(1000)
    adicionar(event: Event) {

        event.preventDefault();  // TIRAR se incluir no throttle()

        let dt = new Date( this._inputData.val().replace(/-/g,',') );    // AAAA-MM-DD
        if ( !this._isDiaUtil(dt) ) {
            this._mensagemView.update('Somente dias úteis');
            return;
        }

        const negoc = new Negociacao(
            dt,
            parseInt( this._inputQuantidade.val() ),
            parseFloat( this._inputValor.val() )
        );

        this._negociacaoLista.adicionar(negoc);

        mostrarConsole(negoc, this._negociacaoLista);


        this._negociacaoView.update(this._negociacaoLista);
        this._mensagemView.update("Negociação adicionada!");

    }

    private _isDiaUtil(dt: Date): boolean {
        return dt.getDay() != DiaSemanaEnum.SABADO && 
            dt.getDay() != DiaSemanaEnum.DOMINGO;
    }

    @throttle()
    async importarDados() {
        
        /*
            async ... await
            ---------------
            Você espera a <Promise> ser executada e vai suspender a execução deste método

            O método será suspenso (limbo), a aplicação continuará rodando normalmente.

            Quando a <Promise> for resolvida, o código volta para a pilha de execução.

            O que capturaria no .then(), ele resolve no retorno da <Promise> e continua
            o fluxo normal. 

            Ele funciona como sync, mas é async

            Podemos usar try {} catch, o que seria impossível utilizar em async

        */

        try {

            const listaNegImportar = await this._negociacaoService
                .obterListaNegociacao( res => {
                        if ( res.ok ) 
                            return res;
                        throw new Error(`Falha de resposta da API: ${res.statusText}`);
                    });
    
            const listaNegAtual = this._negociacaoLista.paraArray();
            listaNegImportar
                .filter(negoc => 
                    !listaNegAtual.some(negAtual => negoc.isEquals(negAtual)))
                .forEach(negoc => this._negociacaoLista.adicionar(negoc));
    
            this._negociacaoView.update(this._negociacaoLista);

        } catch (err) {
            this._mensagemView.update(err.message);
        }
    }

}    

enum DiaSemanaEnum {
    DOMINGO, SEGUNDA, TERCA, QUARTA, QUINTA, SEXTA, SABADO
}