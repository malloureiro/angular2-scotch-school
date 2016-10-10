import {Component, Input} from '@angular/core';
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
	@Input() usersArr: User[]; 

	newUser: User = new User();

	activeForm: boolean = true;

	createUser() {
		this.usersArr.push(this.newUser);

		// Resetting the object after submit
		this.newUser = new User();
		// This is a workaround to re-render form without any validation message after newuser object has been reset
		this.activeForm = false;
		setTimeout(() => this.activeForm = true, 0);
	}
}