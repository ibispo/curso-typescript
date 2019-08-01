class NegociacaoController {

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
        this._negociacaoView.update(this._negociacaoLista);

    }

    adicionar( event: Event ) {

        event.preventDefault();

        const negoc = new Negociacao(
            new Date( this._inputData.val().replace(/-/g,',') ),    // AAAA-MM-DD
            parseInt( this._inputQuantidade.val() ),
            parseFloat( this._inputValor.val() )
        );

        this._negociacaoLista.adicionar(negoc);
        this._negociacaoView.update(this._negociacaoLista);
        this._mensagemView.update("Negociação adicionada!");

    }


}