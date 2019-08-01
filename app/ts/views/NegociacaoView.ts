namespace Views {

    import View = Views.View;

    export class NegociacaoView extends View<NegociacaoLista> {
        
        _template( lista: NegociacaoLista ): string {
    
            return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        ${lista.paraArray()
                            .map( neg => 
                                `
                                <tr>
                                    <td>${neg.data.getDate()}/${neg.data.getMonth()+1}/${neg.data.getFullYear()}</td>
                                    <td>${neg.quantidade}</td>
                                    <td>${neg.valor}</td>
                                    <td>${neg.volume}</td>
                                </tr>
                                `
                            )
                            .join('')}
                    </tbody>
                    
                    <tfoot>
                    </tfoot>
                </table>
            `;
    
        }

}




}