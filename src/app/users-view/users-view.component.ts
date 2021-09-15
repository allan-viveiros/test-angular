import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { User } from '../user';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
