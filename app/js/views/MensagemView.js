class MensagemView extends View {
    _template(info) {
        return `
            <p class='alert alert-info'>${info}</p>
        `;
    }
}
