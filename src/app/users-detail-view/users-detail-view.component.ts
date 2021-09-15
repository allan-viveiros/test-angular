import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouteConfigLoadEnd, Router } from '@angular/router';
import { UsersService } from '../users/users.service';
import { User } from '../user';

@Component({
  selector: 'app-users-detail-view',
  templateUrl: './users-detail-view.component.html',
  styleUrls: ['./users-detail-view.component.css']
})
export class UsersDetailViewComponent implements OnInit {
  user: User = {
    id: 0,
    name:'',
    username:'',
    email: '',
    phone:'',
    address: {street: '',
      suite: '',
      city: '',
      geo: {lat:'', lng:''}
    }
  };

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.user = this.usersService.getUsersById(+params.get('id')) || this.user;
    });
  }

  goBackToUsers(){
    this.router.navigate(['/users']);
  }

  saveChanges(){
    this.usersService.updateUser(this.user.id, this.user);
  }

}
