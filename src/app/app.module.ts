import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FriendsComponent } from './friends/friends.component';
import { IdeasComponent } from './ideas/ideas.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { FriendAddComponent } from './friends/friend-list/friend-add/friend-add.component';
import { IdeaEditComponent } from './ideas/idea-edit/idea-edit.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { IdeaModalComponent } from './ideas/idea-edit/idea-modal/idea-modal.component';
import { FriendService } from './friends/friend.service';
import { IdeaService } from './ideas/idea.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FriendsComponent,
    IdeasComponent,
    FriendListComponent,
    FriendAddComponent,
    IdeaEditComponent,
    IdeaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [BsModalService, FriendService, IdeaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
