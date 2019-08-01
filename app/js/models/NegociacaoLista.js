class NegociacaoLista {
    constructor() {
        this._negociacaoLista = [];
    }
    adicionar(negoc) {
        this._negociacaoLista.push(negoc);
    }
    paraArray() {
        return [].concat(this._negociacaoLista);
    }
}
