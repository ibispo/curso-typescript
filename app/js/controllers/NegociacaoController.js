System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, DiaSemanaEnum;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacaoLista = new index_2.NegociacaoLista();
                    this._negociacaoView = new index_1.NegociacaoView('#tabNeg');
                    this._mensagemView = new index_1.MensagemView("#msg");
                    this._inputData = $("#data");
                    this._inputQuantidade = $("#quantidade");
                    this._inputValor = $("#valor");
                    this._negociacaoView.update(this._negociacaoLista);
                }
                adicionar(event) {
                    event.preventDefault();
                    let dt = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._isDiaUtil(dt)) {
                        this._mensagemView.update('Somente dias úteis');
                        return;
                    }
                    const negoc = new index_2.Negociacao(dt, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacaoLista.adicionar(negoc);
                    this._negociacaoView.update(this._negociacaoLista);
                    this._mensagemView.update("Negociação adicionada!");
                }
                _isDiaUtil(dt) {
                    return dt.getDay() != DiaSemanaEnum.SABADO &&
                        dt.getDay() != DiaSemanaEnum.DOMINGO;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaSemanaEnum) {
                DiaSemanaEnum[DiaSemanaEnum["DOMINGO"] = 0] = "DOMINGO";
                DiaSemanaEnum[DiaSemanaEnum["SEGUNDA"] = 1] = "SEGUNDA";
                DiaSemanaEnum[DiaSemanaEnum["TERCA"] = 2] = "TERCA";
                DiaSemanaEnum[DiaSemanaEnum["QUARTA"] = 3] = "QUARTA";
                DiaSemanaEnum[DiaSemanaEnum["QUINTA"] = 4] = "QUINTA";
                DiaSemanaEnum[DiaSemanaEnum["SEXTA"] = 5] = "SEXTA";
                DiaSemanaEnum[DiaSemanaEnum["SABADO"] = 6] = "SABADO";
            })(DiaSemanaEnum || (DiaSemanaEnum = {}));
        }
    };
});
