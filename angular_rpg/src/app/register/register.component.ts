import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor(private http: HttpClient) { }

	ngOnInit() {
	}

  	onSubmitRegisterForm($event, f: NgForm){
	  	$event.preventDefault();

		this.http.post(`/api/register`, {
			username: f.value.username,
			password: f.value.password
		}).subscribe(
			res => {
				console.log(res)
				f.resetForm()
			},
			err => {
	  			console.log(err);
			}
		);
  	}

}
