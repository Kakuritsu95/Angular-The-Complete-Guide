import { Component, Input, input, computed } from '@angular/core';
import { User } from '../mock/dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Without signals
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // get ImagePath() {
  //   return 'assets/users/' + this.avatar();
  // }

  // With signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  user = input.required<User>();
  imagePath = computed(() => 'assets/users/' + this.user()?.avatar);

  onSelectUser() {}
}
