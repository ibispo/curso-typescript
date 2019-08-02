export function logTempoExec( isSegundos: boolean = false) {

    return function(target: any, propertyKey: string, 
        descriptor: PropertyDescriptor) {

        // Nos dá acesso a implementação do método decorado através de descritor.value
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {

            let unid = isSegundos ? "seg" : "ms";
            let div = isSegundos ? 1000 : 1;

            console.log(`Método "${propertyKey}" parâmetros passados: ${JSON.stringify(args)}`);
            
            const tempoAtend = performance.now();
            
            // Teste de tempo de "delay"
            // setTimeout(() => {
                
                const ret = originalMethod.apply(this, args);
                
                console.log(`Retorno do método é: ${JSON.stringify(ret)}`);
                console.log(`Tempo: ${(performance.now() - tempoAtend) / div} ${unid}.`);
                console.log('--------------------------------------');

            return ret;

            //  }, 5000);


        }

        return descriptor;

    }

}