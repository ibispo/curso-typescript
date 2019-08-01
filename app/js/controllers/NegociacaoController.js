class NegociacaoController {
    constructor() {
        this._negociacaoLista = new NegociacaoLista();
        this._negociacaoView = new Views.NegociacaoView('#tabNeg');
        this._mensagemView = new Views.MensagemView("#msg");
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacaoView.update(this._negociacaoLista);
    }
    adicionar(event) {
        event.preventDefault();
        const negoc = new Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._negociacaoLista.adicionar(negoc);
        this._negociacaoView.update(this._negociacaoLista);
        this._mensagemView.update("Negociação adicionada!");
    }
}
