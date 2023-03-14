import { Component, OnInit } from '@angular/core';
import { Idea } from '../shared/idea.model';
import { IdeaService } from './idea.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IdeaEditComponent } from './idea-edit/idea-edit.component';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  ideas: Idea[] = [];
  modalRef: BsModalRef;

  constructor(private ideaService: IdeaService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.ideas = this.ideaService.getIdeas();
  }

  openModal(){
    this.modalRef = this.modalService.show(IdeaEditComponent);
  }

}
