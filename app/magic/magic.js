var message = "hello world";
function saySomething(message) {
    console.log(message);
}
saySomething(message);
// Example of class in Typescript language
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.sayHello = function (message) {
        if (message === void 0) { message = 'hello stranger'; }
        console.log(message);
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.sayHello();
//# sourceMappingURL=magic.js.map