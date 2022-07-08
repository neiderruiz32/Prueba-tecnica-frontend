import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppRestService } from 'src/app/service/app-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form: FormGroup;
  constructor(private fb: FormBuilder , private api:AppRestService) {
this.form=this.fb.group({
  usuario: ['', Validators.required],
  password: ['', Validators.required],
})
}
  ngOnInit(): void {
    let Token = this.getToken();
    console.log(Token);
  }


  ingresar(){
    console.log(this.form)
  }
  getToken(){
    return localStorage.getItem('token');
  }
}



