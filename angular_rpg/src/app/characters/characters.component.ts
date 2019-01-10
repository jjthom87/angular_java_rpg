import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private http: HttpClient) { }
  characters = [];
  characterNames = [];
  characterClicked = false;
  characterSelected;

  populateCharacters(characters){
  	characters.forEach((c) => this.characters.push(c));
  	characters.forEach((c) => this.characterNames.push({img: c.img, name: c.name}));
  }

  onSelect($event, name){
  	this.characterClicked = true;
  	for(var i = 0; i < this.characters.length; i++){
  		if(this.characters[i].name === name){
  			this.characterSelected = this.characters[i];
  		}
  	}
  }

  ngOnInit(): void {
    this.http.get(`/api/characters`).subscribe((res:Response) => {
    	console.log(res)
    	this.populateCharacters(res);
    });
  }

}
