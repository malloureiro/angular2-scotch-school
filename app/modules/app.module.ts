import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../components/app.component';
import { UserProfileComponent } from '../components/user-profile.component';
import { UserFormComponent } from '../components/user-form.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, UserProfileComponent, UserFormComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}