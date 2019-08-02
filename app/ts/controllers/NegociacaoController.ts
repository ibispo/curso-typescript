import { NegociacaoView, MensagemView } from '../views/index';
import { Negociacao, NegociacaoLista } from '../models/index';
// import { logTempoExec } from '../helpers/decorators/LogTempoExec';

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;

    private _negociacaoLista = new NegociacaoLista();

    private _negociacaoView = new NegociacaoView('#tabNeg');
    private _mensagemView = new MensagemView("#msg");


    constructor() {

        
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacaoView.update( this._negociacaoLista );

    }

    // Decorator "experimental" ES5
    // @logTempoExec()
    adicionar( event: Event ) {

        event.preventDefault();

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
        this._negociacaoView.update(this._negociacaoLista);
        this._mensagemView.update("Negociação adicionada!");

    }

    private _isDiaUtil(dt: Date): boolean {
        return dt.getDay() != DiaSemanaEnum.SABADO && 
            dt.getDay() != DiaSemanaEnum.DOMINGO;
    }

}

enum DiaSemanaEnum {
    DOMINGO, SEGUNDA, TERCA, QUARTA, QUINTA, SEXTA, SABADO
}