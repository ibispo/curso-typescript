import { Negociacao } from './Negociacao';

export class NegociacaoLista {

    private _negociacaoLista: Negociacao[] = [];

    adicionar( negoc: Negociacao): void {
        this._negociacaoLista.push(negoc);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat( this._negociacaoLista );
    }


}