import { Component } from '@angular/core';

@Component({
	selector: "my-app",
	template: `

		<header>
			<nav class="navbar navbar-inverse">
				<div class="navbar-header">
					<a href="/" class="navbar-brand">My Angular 2 App!</a>
				</div>
			</nav>
		</header>

		<main>
			<div class="row">
				<div class="col-sm-4">
					<div *ngIf="users">
						<ul class="list-group users-list">
							<li class="list-group-item" *ngFor="let user of users" (click)="selectUser(user)" [class.active]="user===activeUser">
								{{user.name}} ({{user.username}})
							</li>
						</ul>
					</div>
				</div>
				<div class="col-sm-8">
					<div class="jumbotron" *ngIf="activeUser">
						<h2>{{activeUser.name}} <small>({{activeUser.username}})</small></h2>
						<h4>{{activeUser.personalMessage}}</h4>
					</div>

					<div class="jumbotron" *ngIf="!activeUser">
						<span class="glyphicon glyphicon-hand-left"></span>
						<h2>Choose a User</h2>
					</div>
				</div>
			</div>
		</main>
		
		<footer class="text-center">
	      Copyright &copy; 2016
	    </footer>
	`,
	styles: [`
		.jumbotron{
			 box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
		}
		.users-list li{
			cursor:pointer;
		}
		.jumbotron .glyphicon{
			font-size: 70px;
		}

		`
	]
})

export class AppComponent {
	// Cannot use 'const' or 'var' to create a variable inside of a class
	message = "Welcome to my App!";

	users = [
		{ id: 1, name: "Mary", username: "malloureiro", personalMessage: "Hello you!"},
		{ id: 2, name: "John", username: "jowjonas", personalMessage: "Hey!" },
		{ id: 3, name: "Luke", username: "lukecage", personalMessage: "I'm not Carl Lucas" }
	];

	activeUser = null;
	//function
	selectUser(user) {
		this.activeUser = user;
		console.log(this.activeUser);
	}

}
