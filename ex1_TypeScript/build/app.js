define(["require", "exports", "animal"], function (require, exports, Animal) {
    "use strict";
    function start() {
        var garry = new Animal.Snail('Garry');
        var simbad = new Animal.Lion('Simbad', Animal.Sex.MALE);
        console.log(garry.name);
        console.log(simbad.name, simbad.sex);
    }
    exports.start = start;
});
