import { Injectable } from '@angular/core';
import { Friend } from './friend.model'

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private friends: Friend[] = [
    new Friend('Erin Myers', 'Read Percy Jackson '),
    new Friend('Jo Jackson', 'Watch the Godfather ')
  ];

  constructor() { }


  getFriends() {
    return this.friends.slice();
  }

}