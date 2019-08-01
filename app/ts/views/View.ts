namespace Views {
    
    export abstract class View<T> {
    
        private _element: JQuery;
    
        constructor( compon: string ) {
            this._element = $(compon);
        }
    
        update( modelo: T ): void {
            this._element.html(this._template(modelo));
        }
    
        // Métodos abstratos
        abstract _template( mod: T ): string;
    
    }

}    

