import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService {

    obterListaNegociacao(handler: HandlerFunction): Promise<void | Negociacao[]> {
        
        return fetch('http://localhost:8082/dadosx')
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

}

export interface HandlerFunction {

    (res: Response): Response;

}

