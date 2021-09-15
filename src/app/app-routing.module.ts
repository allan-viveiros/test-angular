import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersDetailViewComponent } from './users-detail-view/users-detail-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersViewComponent },
  { path: 'users/:id', component: UsersDetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
