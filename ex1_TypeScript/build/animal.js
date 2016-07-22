var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var Snail = (function (_super) {
        __extends(Snail, _super);
        function Snail() {
            _super.apply(this, arguments);
        }
        Snail.prototype.shout = function () {
            return '...';
        };
        return Snail;
    }(Animal));
    exports.Snail = Snail;
    (function (Sex) {
        Sex[Sex["MALE"] = 0] = "MALE";
        Sex[Sex["FEMALE"] = 1] = "FEMALE";
    })(exports.Sex || (exports.Sex = {}));
    var Sex = exports.Sex;
    ;
    var Lion = (function (_super) {
        __extends(Lion, _super);
        function Lion(name, sex) {
            _super.call(this, name);
            this.sex = sex;
        }
        Lion.prototype.shout = function () {
            return 'Rooooaarrr!';
        };
        return Lion;
    }(Animal));
    exports.Lion = Lion;
});
