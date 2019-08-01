class NegociacaoLista {

    private _negociacaoLista: Negociacao[] = [];

    adicionar( negoc: Negociacao): void {
        this._negociacaoLista.push(negoc);
    }

    paraArray(): Negociacao[] {
        return [].concat( this._negociacaoLista );
    }


}