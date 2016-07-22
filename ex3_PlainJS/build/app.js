define(["require", "exports", 'metal'], function (require, exports, Metal) {
    "use strict";
    function start() {
        var gold = new Metal('Gold', 1064);
        console.log(gold.name, gold.meltingPoint);
    }
    exports.start = start;
});
