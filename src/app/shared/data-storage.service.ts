import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FriendService } from '../friends/friend.service';
import { IdeaService } from '../ideas/idea.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private friendService: FriendService, private ideaService: IdeaService) { }

  
}
