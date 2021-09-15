import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  name: string = '';
  email: string = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {}

  addUser() {
    if(this.name && this.email) {
      const usersCount = this.usersService.getUsers().length;
      const user: User = {
        id: usersCount + 1,
        name: this.name,
        email: this.email,
        phone: '',
        username: '',
        address: {
          street: '',
          city: '',
          suite:'',
          geo: {
            lat: '',
            lng:'',
          }
        },
      };
      this.usersService.addUser(user);
    }
  }
}
