import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { IdeasComponent } from './ideas/ideas.component';

const routes: Routes = [

  { path: '', redirectTo: '/friends', pathMatch: 'full'},

  { component:FriendsComponent, path:'friends'  },
  
  { component:IdeasComponent, path:'ideas'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
