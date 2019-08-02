import { logTempoExec } from '../helpers/decorators/LogTempoExec';

export abstract class View<T> {
    
        private _element: JQuery;
        private _escapar: boolean;
    
        /*
            "?" indica que o parâmetro é opcional. O valor é "undefined"
            Parametros opcionais devem ser os últimos da assinatura
        */
        constructor( compon: string, escap: boolean = false ) {
            this._element = $(compon);
            this._escapar = escap;
        }
    
        // Decorator "experimental" ES5
        @logTempoExec()
        update( modelo: T ): void {

            let templ = this._template(modelo);

            if ( this._escapar )
                templ = templ.replace(/<script>[\s\S]*?<\/script>/g, '');

            this._element.html( templ );

        }
    
        // Métodos abstratos
        abstract _template( mod: T ): string;
    
    }

