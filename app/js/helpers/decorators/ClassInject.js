System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function meuDecoratorDeClasse() {
        return function (constructor) {
            const original = constructor;
            const novoConstructor = function (...args) {
                console.log("Criando uma instância com New: " + original.name);
                return new original(...args);
            };
            novoConstructor.prototype = original.prototype;
            return novoConstructor;
        };
    }
    exports_1("meuDecoratorDeClasse", meuDecoratorDeClasse);
    return {
        setters: [],
        execute: function () {
        }
    };
});
