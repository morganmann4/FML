import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendEditComponent } from './friends/friend-list/friend-edit/friend-edit.component';
import { FriendsComponent } from './friends/friends.component';
import { IdeasComponent } from './ideas/ideas.component';

const routes: Routes = [

  { path: '', redirectTo: '/friends', pathMatch: 'full'},

  { component:FriendsComponent, path:'friends',
  children: [
    { component:FriendEditComponent, path: 'id'}
    ]  
  },
  
  { component:IdeasComponent, path:'ideas'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
