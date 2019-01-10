import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmitInputForm($event, f: NgForm){
  	$event.preventDefault();
    const params = new HttpParams();
    params.set('username', f.value.username);
    params.set('password', f.value.password);

    this.http.post(`/api/login`,
      encodeURI(`username=${f.value.username}&password=${f.value.password}`),
      {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),

    }).subscribe(
      res => {
        console.log(res)
        f.resetForm()
      },
      err => {
        console.log(err)
        if(err.url.indexOf("userhome") > -1){
          this.router.navigate(['/userhome'])
        } else if (err.url.indexOf("login") > -1){
          f.resetForm()
          this.router.navigate(['/login'])
        }
      }
    );
  }

}
