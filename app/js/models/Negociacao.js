class Negociacao {
    constructor(_dt, _qtd, _vlr) {
        this._dt = _dt;
        this._qtd = _qtd;
        this._vlr = _vlr;
    }
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
