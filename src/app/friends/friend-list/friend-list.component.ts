import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Friend } from '../friend.model';
import { FriendService } from '../friend.service';
import { FriendEditComponent } from './friend-edit/friend-edit.component';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friends: Friend[] = [];
  modalRef: BsModalRef;
  nestedModalRef: BsModalRef;


  constructor(private friendService: FriendService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.friends =  this.friendService.getFriends();
    this.friendService.friendsChanged.subscribe((friends: Friend[]) =>
    {
      this.friends = friends;
    })
   } 

  openNestedEditModal(content: TemplateRef<any>) {
    this.nestedModalRef = this.modalService.show(content);

  }

  deleteFriend(){
    this.nestedModalRef.hide();
    this.modalRef.hide();
  }

  onEditItem(index: number, content: TemplateRef<any>){
    this.modalRef = this.modalService.show(content);
  }
}

