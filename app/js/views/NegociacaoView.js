System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, NegociacaoView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacaoView = class NegociacaoView extends View_1.View {
                _template(lista) {
                    return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        ${lista.paraArray()
                        .map(neg => `
                                <tr>
                                    <td>${neg.data.getDate()}/${neg.data.getMonth() + 1}/${neg.data.getFullYear()}</td>
                                    <td>${neg.quantidade}</td>
                                    <td>${neg.valor}</td>
                                    <td>${neg.volume}</td>
                                </tr>
                                `)
                        .join('')}
                    </tbody>
                    
                    <tfoot>
                    </tfoot>
                </table>
            `;
                }
            };
            exports_1("NegociacaoView", NegociacaoView);
        }
    };
});
