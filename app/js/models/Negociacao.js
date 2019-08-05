System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
                toText() {
                    console.log("Impressão: -------------------");
                    console.log(`Data: ${this.data}
Quantidade: ${this.quantidade}
Valor: ${this.valor}
Volume: ${this.volume}`);
                }
                isEquals(obj) {
                    return this.data.getDate() == obj.data.getDate() &&
                        this.data.getMonth() == obj.data.getMonth() &&
                        this.data.getFullYear() == obj.data.getFullYear();
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
