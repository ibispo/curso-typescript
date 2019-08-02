System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logTempoExec(isSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                let unid = isSegundos ? "seg" : "ms";
                let div = isSegundos ? 1000 : 1;
                console.log(`Método "${propertyKey}" parâmetros passados: ${JSON.stringify(args)}`);
                const tempoAtend = performance.now();
                const ret = originalMethod.apply(this, args);
                console.log(`Retorno do método é: ${JSON.stringify(ret)}`);
                console.log(`Tempo: ${(performance.now() - tempoAtend) / div} ${unid}.`);
                console.log('--------------------------------------');
                return ret;
            };
            return descriptor;
        };
    }
    exports_1("logTempoExec", logTempoExec);
    return {
        setters: [],
        execute: function () {
        }
    };
});
