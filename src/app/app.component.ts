import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './mock/dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'first-angular-app';
}
