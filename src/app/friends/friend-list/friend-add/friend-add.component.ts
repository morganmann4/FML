import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { FriendService } from '../../friend.service';
import { Friend } from '../../friend.model';

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent implements OnInit {
   @ViewChild('f', { static: false }) idForm: NgForm;
   modalRef: BsModalRef;
   constructor(private modalService: BsModalService, private friendService: FriendService) {}

   openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
   }

   ngOnInit(): void {

   }

   onSubmit(form: NgForm){
      const value = form.value;
      const newFriend = new Friend(value.name, value.idea);
      this.friendService.addFriend(newFriend);
      form.reset();
    }
}