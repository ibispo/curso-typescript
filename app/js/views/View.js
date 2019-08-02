System.register(["../helpers/decorators/LogTempoExec"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var LogTempoExec_1, View;
    return {
        setters: [
            function (LogTempoExec_1_1) {
                LogTempoExec_1 = LogTempoExec_1_1;
            }
        ],
        execute: function () {
            View = class View {
                constructor(compon, escap = false) {
                    this._element = $(compon);
                    this._escapar = escap;
                }
                update(modelo) {
                    let templ = this._template(modelo);
                    if (this._escapar)
                        templ = templ.replace(/<script>[\s\S]*?<\/script>/g, '');
                    this._element.html(templ);
                }
            };
            __decorate([
                LogTempoExec_1.logTempoExec()
            ], View.prototype, "update", null);
            exports_1("View", View);
        }
    };
});
