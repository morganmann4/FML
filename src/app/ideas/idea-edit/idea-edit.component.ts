import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Idea } from 'src/app/shared/idea.model';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-idea-edit',
  templateUrl: './idea-edit.component.html',
  styleUrls: ['./idea-edit.component.css']
})
export class IdeaEditComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('f', { static: false }) idForm: NgForm;


  constructor(private modalService: BsModalService, private ideaService: IdeaService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIdea = new Idea(value.category, value.activity);
    this.ideaService.addIdea(newIdea);
    form.reset();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
 }
}
