System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function mostrarConsole(...mostraList) {
        mostraList.forEach(mostra => mostra.toText());
    }
    exports_1("mostrarConsole", mostrarConsole);
    function procToken(tok) {
        if (typeof (tok) === 'string') {
            return tok.replace(/2/g, 'X');
        }
        else {
            return tok.toFixed().replace(/2/g, 'X');
        }
    }
    return {
        setters: [],
        execute: function () {
        }
    };
});
