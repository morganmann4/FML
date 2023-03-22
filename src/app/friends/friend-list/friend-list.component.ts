import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Friend } from '../friend.model';
import { FriendService } from '../friend.service';
import { FriendEditComponent } from './friend-edit/friend-edit.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friends: Friend[] = [];
  modalRef: BsModalRef;
  nestedModalRef: BsModalRef;
  @ViewChild('f') friendForm: NgForm;
  editMode = false;
  editIndex: number;
  editedFriend: Friend;

  constructor(private friendService: FriendService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.friends =  this.friendService.getFriends();
    this.friendService.friendsChanged.subscribe((friends: Friend[]) =>
    {
      this.friends = friends;
    })

    this.friendService.friendSelected.subscribe((index: number) => {
      this.editIndex = index;
      this.editMode = true;
      this.editedFriend = this.friendService.getFriend(index);
      this.friendForm.setValue({
        name: this.editedFriend.name, 
        idea: this.editedFriend.idea
      })
    })
   } 

   
  openNestedEditModal(content: TemplateRef<any>) {
    this.nestedModalRef = this.modalService.show(content);
  }

  onEditItem(index: number, content: TemplateRef<any>){
    this.modalRef = this.modalService.show(content);
    this.friendService.friendSelected.emit(index);
  }

  deleteFriend(){
    this.nestedModalRef.hide();
    this.modalRef.hide();
    this.friendService.deleteFriend(this.editIndex);
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newFriend = new Friend(value.name, value.idea);
    if(this.editMode){
      this.friendService.updateFriend(this.editIndex, newFriend)
    } else {
      this.friendService.addFriend(newFriend);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.friendForm.reset();
    this.editMode = false;
  }
}

