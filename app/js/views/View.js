class View {
    constructor(compon) {
        this._element = $(compon);
    }
    update(modelo) {
        this._element.html(this._template(modelo));
    }
}
