namespace Views {

    export class MensagemView extends Views.View<string> {
    
        _template( info: string ) {
            return `
                <p class='alert alert-info'>${info}</p>
            `;
        }
    
    }

}

