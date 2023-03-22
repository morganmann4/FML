import { EventEmitter, Injectable } from '@angular/core';
import { Friend } from './friend.model'
import { Idea } from '../shared/idea.model';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  friendsChanged = new EventEmitter<Friend[]>();
  friendSelected = new EventEmitter<number>();

  private friends: Friend[] = [
    new Friend('Erin Myers', 'Read Percy Jackson '),
    new Friend('Jo Jackson', 'Watch the Godfather ')
  ];

  getFriends() {
    return this.friends.slice();
  }

  addFriend(friend: Friend) {
    this.friends.push(friend);
    this.friendsChanged.emit(this.friends.slice())
  }
}