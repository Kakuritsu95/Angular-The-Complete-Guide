import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../mock/dummy-users';

const randomIndex = (array: any[]) => Math.floor(Math.random() * array.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex(DUMMY_USERS)]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // Without signals
  // selectedUser = DUMMY_USERS[randomIndex(DUMMY_USERS)];
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  onSelectUser = () =>
    this.selectedUser.set(DUMMY_USERS[randomIndex(DUMMY_USERS)]);
}
