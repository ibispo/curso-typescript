System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacaoLista;
    return {
        setters: [],
        execute: function () {
            NegociacaoLista = class NegociacaoLista {
                constructor() {
                    this._negociacaoLista = [];
                }
                adicionar(negoc) {
                    this._negociacaoLista.push(negoc);
                }
                paraArray() {
                    return [].concat(this._negociacaoLista);
                }
            };
            exports_1("NegociacaoLista", NegociacaoLista);
        }
    };
});
