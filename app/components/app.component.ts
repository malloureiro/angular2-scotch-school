import {Component} from '@angular/core';
import {User} from '../models/user';


//() = event bindings, example: (click)
//[] = property bindings, example: [class.active]
//[(ngModel)] = two way data-binding. The input of a user is bind to a class property (User) and when it receives content it also updates the property.

@Component({
	selector: 'my-app',
	templateUrl: './app/views/app.component.html',
	styleUrls: ['./app/styles/app.component.css']
})

export class AppComponent {
	// Cannot use 'const' or 'var' to create a variable inside of a class
	message: string = "Welcome to my App!";

	users: User[] = [
		{ id: 1, name: "Mary", username: "malloureiro", personalMessage: "Hello you!"},
		{ id: 2, name: "John", username: "jowjonas", personalMessage: "Hey!" },
		{ id: 3, name: "Luke", username: "lukecage", personalMessage: "I'm not Carl Lucas" }
	];

	activeUser: User = null;
	//function
	selectUser(user: User) {
		this.activeUser = user;
		console.log(this.activeUser);
	}

	onUserCreated(event) {
		this.users.push(event.newUser);
	}
}
