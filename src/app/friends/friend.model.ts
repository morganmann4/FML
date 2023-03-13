import { Idea } from "../shared/idea.model";

export class Friend{
    public name: string;
    public idea: string;

    constructor(name: string, idea: string){
        this.name = name;
        this.idea = idea;
    }

}