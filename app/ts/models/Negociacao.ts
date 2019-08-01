class Negociacao {

    constructor ( 
        private _dt: Date, 
        private _qtd: number, 
        private _vlr: number ) {}

    get data() {
        return this._dt;
    }

    get quantidade() {
        return this._qtd;
    }

    get valor() {
        return this._vlr;
    }

    get volume() {
        return this._qtd * this._vlr;
    }

}