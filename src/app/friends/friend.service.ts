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

  getFriend(index: number){
    return this.friends[index];
}
  addFriend(friend: Friend) {
    this.friends.push(friend);
    this.friendsChanged.emit(this.friends.slice())
  }

  deleteFriend(index: number){
    this.friends.splice(index, 1)
    this.friendsChanged.emit(this.friends.slice())
  }

  updateFriend(index: number, newFriend: Friend){
    this.friends[index] = newFriend;
    this.friendsChanged.emit(this.friends.slice());
}

}