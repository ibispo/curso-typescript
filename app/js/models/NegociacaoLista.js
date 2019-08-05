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
                toText() {
                    console.log("Impressão: -------------------");
                    console.log(JSON.stringify(this._negociacaoLista));
                }
                isEquals(obj) {
                    return JSON.stringify(this._negociacaoLista) ==
                        JSON.stringify(obj);
                }
            };
            exports_1("NegociacaoLista", NegociacaoLista);
        }
    };
});
