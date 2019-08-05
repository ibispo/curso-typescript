export function throttle( milli = 500 ) {

    return function(target: any, propertyKey: string, 
        descriptor: PropertyDescriptor) {

        // Nos dá acesso a implementação do método decorado através de descritor.value
        const originalMethod = descriptor.value;
    
        
        /* 
            Por questões conceituais, métodos de "evento" (ações do usuário)
            não possuem qualquer retorno, portanto, nossa function abaixo também 
            não retornará.
        */
        let timerExec = 0;
        descriptor.value = function(...args: any[]) {

            // -> Testando evento
            if ( event )
                event.preventDefault();

            clearInterval(timerExec);
            timerExec = setTimeout(() => originalMethod.apply(this, args), milli);

        }

        return descriptor;

    }

}