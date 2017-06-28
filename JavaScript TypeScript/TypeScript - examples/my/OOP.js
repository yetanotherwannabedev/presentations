var Circle = (function () {
    function Circle(radius) {
        var _this = this;
        this.radius = radius;
        this.getArea = function () { return Math.PI * Math.pow(_this.radius, 2); };
    }
    return Circle;
}());
var Square = (function () {
    function Square(a) {
        var _this = this;
        this.a = a;
        this.getArea = function () { return Math.pow(_this.a, 2); };
    }
    return Square;
}());
