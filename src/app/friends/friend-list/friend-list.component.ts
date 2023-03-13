import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend.model';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friends: Friend[] = [];

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.friends =  this.friendService.getFriends();
   } 
}

