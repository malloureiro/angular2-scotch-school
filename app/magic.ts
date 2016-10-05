const message = "hello world";

function saySomething(message: string) {
	console.log(message);
}

saySomething(message);

// Example of class in Typescript language

class Greeter {

	sayHello(message: string = 'hello stranger') {
		console.log(message);
	}
}

var greeter = new Greeter();
greeter.sayHello();