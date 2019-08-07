System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegociacaoService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService {
                obterListaNegociacao(handler) {
                    return fetch('http://localhost:8082/dados')
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((listaDado) => listaDado
                        .map(dado => new index_1.Negociacao(new Date(), dado.vezes, dado.montante)))
                        .catch(err0 => {
                        console.log(err0);
                        throw new Error(`Falha ao acionar API de dados: ${err0.message}`);
                    });
                }
                obterCEP(handler, cep) {
                    return fetch(`https://viacep.com.br/ws/${cep}/json`)
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((dadosCEP) => {
                        console.log(`
Endereço: ${dadosCEP.logradouro} 
Complemento: ${dadosCEP.complemento} 
Bairro: ${dadosCEP.bairro} 
Localidade: ${dadosCEP.localidade} - ${dadosCEP.uf}
CEP: ${dadosCEP.cep}
                `);
                    })
                        .catch(err0 => {
                        console.log(err0);
                        throw new Error(`Falha ao acionar API de CEP: ${err0.message}`);
                    });
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
