import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent implements OnInit {

   modalRef: BsModalRef;
   constructor(private modalService: BsModalService) {}

   openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
   }

   ngOnInit(): void {
   }
}