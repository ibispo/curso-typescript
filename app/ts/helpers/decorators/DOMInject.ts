export function domInject( select: string ) {

    return function(target: any, key: string) {

        let element: JQuery;

        const getter = function () {

            if ( !element ) {
                console.log(`Buscando ${select} injetar em ${key}`);
                element = $(select);
            }

            return element;

        }

        Object.defineProperty(target, key, {
            get: getter
        });

    }

}
