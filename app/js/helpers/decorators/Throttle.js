System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(milli = 500) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            let timerExec = 0;
            descriptor.value = function (...args) {
                if (event)
                    event.preventDefault();
                clearInterval(timerExec);
                timerExec = setTimeout(() => originalMethod.apply(this, args), milli);
            };
            return descriptor;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
