export class Negociacao {

    constructor ( 
        readonly data: Date, 
        readonly quantidade: number, 
        readonly valor: number ) {}

    /*

        Um objeto onde temos que apenas ler suas propriedades, no construtor colocamos
        "readonly" para essas propriedades. Neste caso, não é necessário implementar
        os getters das propriedades
        -----------------------------------------------------
        Se não queremos que as propriedades sejam visualizadas fora da nossa classe,
        aí devemos colocar como "private" e implementar os getters necessários

    */

    get volume() {
        return this.quantidade * this.valor;
    }

}