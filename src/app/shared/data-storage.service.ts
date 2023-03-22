import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FriendService } from '../friends/friend.service';
import { IdeaService } from '../ideas/idea.service';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Friend } from '../friends/friend.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  item$: Observable<Friend[]>;
  firestore: Firestore = inject(Firestore);

  constructor(private http: HttpClient, private friendService: FriendService, private ideaService: IdeaService) { 
    // const itemCollection = collection(this.firestore, 'items');
    // this.item$ = collectionData(collection);
  }

  
}
