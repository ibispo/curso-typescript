System.register(["./controllers/NegociacaoController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacaoController_1, negCont;
    return {
        setters: [
            function (NegociacaoController_1_1) {
                NegociacaoController_1 = NegociacaoController_1_1;
            }
        ],
        execute: function () {
            negCont = new NegociacaoController_1.NegociacaoController();
            $('.form').submit(negCont.adicionar.bind(negCont));
            $('#btnImport').click(negCont.importarDados.bind(negCont));
        }
    };
});
