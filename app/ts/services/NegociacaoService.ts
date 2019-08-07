import { Negociacao, NegociacaoParcial } from '../models/index';
import { DadosCEP } from '../models/DadosCEP';

export class NegociacaoService {

    obterListaNegociacao(handler: HandlerFunction): Promise<Negociacao[]> {
        
        return fetch('http://localhost:8082/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((listaDado: NegociacaoParcial[]) => 
                listaDado
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err0 => {
                console.log(err0);
                throw new Error(`Falha ao acionar API de dados: ${err0.message}`);
            });

    }

    obterCEP(handler: HandlerFunction, cep: string) {

        return fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then(res => handler(res))
            .then(res => res.json())
            .then((dadosCEP: DadosCEP) => { 
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

}

export interface HandlerFunction {

    (res: Response): Response;

}

