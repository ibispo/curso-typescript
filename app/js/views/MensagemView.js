var Views;
(function (Views) {
    class MensagemView extends Views.View {
        _template(info) {
            return `
                <p class='alert alert-info'>${info}</p>
            `;
        }
    }
    Views.MensagemView = MensagemView;
})(Views || (Views = {}));
