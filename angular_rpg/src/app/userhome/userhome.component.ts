import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

interface LoginObj {
  username: string;
}

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  loggedInUser : String
  userSelectedCharId : number;
  userSelectedChar : string;

  onSubmitLogout($event, f: NgForm){
    $event.preventDefault();

    this.http.post(`/api/logout`,{}).subscribe(
      res => {
        this.router.navigate(['/login'])
      },
      err => {
        this.router.navigate(['/login'])
      }
    );
  }

  ngOnInit() {
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
