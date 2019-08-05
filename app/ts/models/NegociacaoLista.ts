import { Negociacao } from './Negociacao';
import { MyObject } from './MyObject';

export class NegociacaoLista implements MyObject<NegociacaoLista> {

    private _negociacaoLista: Negociacao[] = [];

    adicionar( negoc: Negociacao): void {
        this._negociacaoLista.push(negoc);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat( this._negociacaoLista );
    }

    toText(): void {
        console.log("Impressão: -------------------");
        console.log(JSON.stringify(this._negociacaoLista));
    }

    isEquals(obj: NegociacaoLista): boolean {
        return JSON.stringify(this._negociacaoLista) ==
            JSON.stringify(obj);
    }


}