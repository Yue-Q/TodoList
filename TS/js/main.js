var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a1;
a1 = "5";
var a;
a = 8;
a = "hello";
var num;
var string;
var bl;
var u;
var n;
var Arr = [1, 2, 3];
var Arr1 = [1, 2, 3];
var strArr = ["a", "b", "c"];
function foo(name, age) {
    return {
        name: name,
        age: age !== null && age !== void 0 ? age : -1
    };
}
console.log(foo("Esther"));
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var obj2 = { name: "Esther", age: 20 };
var obj3 = new Person("Esther", 20);
var obj = { name: "Esther", age: 20 };
var obj1 = { name: "Esther", age: 20 };
function addFn(x, y) {
    return x + y;
}
var addFn1 = function (x, y) {
    return x + y;
};
var addFn3 = function (x, y) { return x + y; };
var addFn4 = function (x, y) { return x + y; };
var numOrStr;
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name, type) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        return _this;
    }
    Cat.prototype.run = function () {
        return this.type + " " + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var myCuteCat = new Cat('Ana', 'cuteCate');
console.log(myCuteCat.run());
var myAn = new Animal('pat');
console.log(myAn.run());
var CatType;
(function (CatType) {
    CatType["SmallCat"] = "SmallCat";
    CatType["CuteCat"] = "CuteCat";
})(CatType || (CatType = {}));
var Cat1 = (function (_super) {
    __extends(Cat1, _super);
    function Cat1(name, type) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        return _this;
    }
    return Cat1;
}(Animal));
var myCuteCat2 = new Cat1('Ana1', "SmallCat");
