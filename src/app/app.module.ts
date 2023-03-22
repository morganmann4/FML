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
import { DataStorageService } from './shared/data-storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FriendEditComponent } from './friends/friend-list/friend-edit/friend-edit.component';

import { HttpClientModule } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FriendsComponent,
    IdeasComponent,
    FriendListComponent,
    FriendAddComponent,
    IdeaEditComponent,
    IdeaModalComponent,
    FriendEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    
    
  ],
  providers: [BsModalService, FriendService, IdeaService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
