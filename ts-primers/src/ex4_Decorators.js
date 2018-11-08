var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: function () { return label; },
            set: function (value) { return value = label; }
        });
    };
}
var Test = /** @class */ (function () {
    function Test() {
        this.name = 'pat';
    }
    __decorate([
        Override('test') // invokes Override, which returns the decorator
    ], Test.prototype, "name");
    return Test;
}());
var t = new Test();
console.log("1. Property Decorator ");
console.log(t.name); // 'test'
console.log("--------------------");
function log(prefix) {
    return function (target) {
        var f = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log(prefix + target.name);
        };
        return f;
    };
}
var World = /** @class */ (function () {
    function World() {
    }
    World = __decorate([
        log('hello')
    ], World);
    return World;
}());
console.log("2. Class Decorator ");
var w = new World(); // outputs "helloWorld"
console.log("--------------------");
console.log("3. Param Decorator ");
function logPosition(target, propertyKey, parameterIndex) {
    console.log(parameterIndex + propertyKey); //0say
}
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.say = function (b, c) {
        console.log(b); //hello
    };
    __decorate([
        __param(0, logPosition)
    ], Cow.prototype, "say");
    return Cow;
}());
new Cow().say('Hello', false); // outputs 1 (newline) hello
console.log("--------------------");
