import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService) {
    this.users = usersService.getUsers();
  }

  ngOnInit(): void {
    this.usersService.usersChanged.subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
