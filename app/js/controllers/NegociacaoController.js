System.register(["../views/index", "../models/index", "../helpers/decorators/index", "../services/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, index_5, timerExec, NegociacaoController, DiaSemanaEnum;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            timerExec = 0;
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacaoLista = new index_2.NegociacaoLista();
                    this._negociacaoView = new index_1.NegociacaoView('#tabNeg');
                    this._mensagemView = new index_1.MensagemView("#msg");
                    this._negociacaoService = new index_4.NegociacaoService();
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
                    index_5.mostrarConsole(negoc, this._negociacaoLista);
                    this._negociacaoView.update(this._negociacaoLista);
                    this._mensagemView.update("Negociação adicionada!");
                }
                _isDiaUtil(dt) {
                    return dt.getDay() != DiaSemanaEnum.SABADO &&
                        dt.getDay() != DiaSemanaEnum.DOMINGO;
                }
                importarDados() {
                    this._negociacaoService
                        .obterListaNegociacao(res => {
                        if (res.ok)
                            return res;
                        throw new Error(`Falha de resposta da API: ${res.statusText}`);
                    })
                        .then((negocLista) => {
                        const listaNegAtual = this._negociacaoLista.paraArray();
                        negocLista
                            .filter(negoc => !listaNegAtual.some(negAtual => negoc.isEquals(negAtual)))
                            .forEach(negoc => this._negociacaoLista.adicionar(negoc));
                        this._negociacaoView.update(this._negociacaoLista);
                    })
                        .catch(err0 => this._mensagemView.update(err0.message));
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.throttle()
            ], NegociacaoController.prototype, "importarDados", null);
            NegociacaoController = __decorate([
                index_3.meuDecoratorDeClasse()
            ], NegociacaoController);
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
