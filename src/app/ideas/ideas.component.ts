import { Component, OnInit } from '@angular/core';
import { Idea } from '../shared/idea.model';
import { IdeaService } from './idea.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  ideas: Idea[] = [];


  constructor(private ideaService: IdeaService) { }

  ngOnInit(): void {
    this.ideas = this.ideaService.getIdeas();
  }



}
