import { Injectable } from '@angular/core';
import { Idea } from '../shared/idea.model';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  private ideas: Idea[] = [
    new Idea('Read', 'Harry Potter'),
    new Idea ('Eat', 'Ombu')
  ];
  
  getIdeas(){
    return this.ideas.slice();
}
}
