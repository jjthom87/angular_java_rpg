import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  	    this.http.get(`/api/getUser`).subscribe((res:Response) => {
    	console.log(res)
    });
  }

}
