import {Component, Output, EventEmitter} from '@angular/core';
import {User} from '../models/user';

@Component({
	selector: 'user-form',
	styles: [`
		form {
	      padding: 10px;
	      background: #ECF0F1;
	      border-radius: 3px;
	      margin-bottom: 30px;
	    }
	`],
	template: `
		<!-- This is binding a form variable (the nickname I'm giving for this form as 'formRef') to the ngForm directive-->
		
		<form #formRef="ngForm" (submit)="createUser()" *ngIf="activeForm">
			{{formRef.valid}}

			<div class="form-group" [ngClass]="{'has-error': newName.invalid && newName.touched}" >
				<input type="text" class="form-control" name="name" required placeholder="Name" [(ngModel)]="newUser.name" #newName="ngModel">
				<span class="help-block" *ngIf="newName.invalid && newName.touched">Please inform the Name</span>
			</div>
			<div class="form-group" [ngClass]="{'has-error': newUsername.invalid && newUsername.touched}">
				<input type="text" class="form-control" name="username" required placeholder="UserName" [(ngModel)]="newUser.username" #newUsername="ngModel">
				<span class="help-block" *ngIf="newUsername.invalid && newUsername.touched">Please inform the Userame</span>
			</div>
			<button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="formRef.invalid">
				Create User
			</button>
		</form>
	`
})
export class UserFormComponent {
	/* Input - Gets information from a parent component. This was done in order to receive the users array from app.component and then add the new user to it.
	 I am now substituting this to use Output(), so I can SEND the information to the app.component and my form will be free to handle only what is its concerns, i.e. validate user's interactions
	*/
	//@Input() usersArr: User[];  

	@Output() userCreated = new EventEmitter();

	newUser: User = new User();

	activeForm: boolean = true;

	createUser() {
		// Notify to the event receiver that a new user has been created and send the new user to the component responsible of saving it (to array).
		this.userCreated.emit({ newUser: this.newUser });
		// Resetting the object after submit
		this.newUser = new User();
		// This is a workaround to re-render form without any validation message after newuser object has been reset
		this.activeForm = false;
		setTimeout(() => this.activeForm = true, 0);
	}
}