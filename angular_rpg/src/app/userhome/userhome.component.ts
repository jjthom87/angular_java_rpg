import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router"

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

  ngOnInit() {
  	this.http.get(`/api/getUser`).subscribe((res:LoginObj) => {
    	if(res.username === "anonymousUser"){
    		this.router.navigate(['/login'])
    	} else {
    		this.loggedInUser = res.username
    	}
    });
  }

}
