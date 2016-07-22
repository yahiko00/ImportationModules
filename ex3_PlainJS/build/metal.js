var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Metal = (function (_super) {
    __extends(Metal, _super);
    function Metal(name, meltingPoint) {
        _super.call(this, name);
        this.meltingPoint = meltingPoint;
    }
    return Metal;
}(Mineral));
