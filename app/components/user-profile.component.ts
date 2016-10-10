import { Component, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
	selector: 'user-profile',
	templateUrl: './app/views/user-profile.component.html'
})
export class UserProfileComponent {
	@Input() activeUser: User; //get information from a parent component - i.e. - receives as input from parent
}