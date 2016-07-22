define(["require", "exports", "jquery", "underscore"], function (require, exports, $, _) {
    "use strict";
    function start() {
        $("h1").hide();
        console.log(_.isEmpty({}));
    }
    exports.start = start;
});
