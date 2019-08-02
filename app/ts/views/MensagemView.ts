import { View } from './View';

export class MensagemView extends View<string> {

    _template( info: string ) {
        return `
            <p class='alert alert-info'>${info}</p>
        `;
    }

}


