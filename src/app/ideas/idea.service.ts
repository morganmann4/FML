import { Injectable } from '@angular/core';
import { Idea } from '../shared/idea.model';
import { EventEmitter } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  ideasChanged = new EventEmitter<Idea[]>();

  private ideas: Idea[] = [
    new Idea('Read', 'Harry Potter'),
    new Idea ('Eat', 'Ombu')
  ];
  
  getIdeas(){
    return this.ideas.slice();
  }

  addIdea(idea: Idea){
    this.ideas.push(idea);
    this.ideasChanged.emit(this.ideas.slice());

  }
}
