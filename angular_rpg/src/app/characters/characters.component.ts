import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  characters = [];
  characterNames = [];
  characterClicked = false;
  characterSelected;
  loggedInUser : string;
  userSelectedCharId : number;
  userSelectedChar : string;

  populateCharacters(characters){
  	characters.forEach((c) => this.characters.push(c));
  	characters.forEach((c) => this.characterNames.push({img: c.img, name: c.name}));
  }

  onSelect($event, name){
  	this.characterClicked = true;
  	for(var i = 0; i < this.characters.length; i++){
  		if(this.characters[i].name === name){
  			this.characterSelected = this.characters[i];
        this.http.get(`/api/addCharacterToUser?characterId=${this.characterSelected.id}`)
          .subscribe((res:Response) => {
            console.log(res)
          })
  		}
  	}
  }

  ngOnInit(): void {
    this.http.get(`/api/characters`).subscribe((res:Response) => {
    	this.populateCharacters(res);
    });
    this.http.get(`/api/getUser`).subscribe((res:{username : string, character_id : number, users_character : string}) => {
      if(res.username === "anonymousUser"){
        this.router.navigate(['/login']);
      } else {
        this.loggedInUser = res.username;
        if(res.character_id){
          this.userSelectedCharId = res.character_id;
          this.userSelectedChar = res.users_character;
        }
      }
    });
  }

}
