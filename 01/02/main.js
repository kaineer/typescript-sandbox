module.exports = function () {
    console.log('Running a function');
};
System.register("main", ["f"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var f_1;
    return {
        setters: [
            function (f_1_1) {
                f_1 = f_1_1;
            }
        ],
        execute: function () {
            f_1["default"]();
        }
    };
});
