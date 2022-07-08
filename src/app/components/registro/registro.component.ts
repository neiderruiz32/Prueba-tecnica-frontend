import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  this.form=this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    DoctoIdent: ['', Validators.required],
    Email: ['', Validators.required],
    Contraseña: ['', Validators.required],
    Cia: ['', Validators.required],

  })
}
  ngOnInit(): void {
    let Token = this.getToken();
    console.log(Token);
  }
  registro(){
    console.log(this.form)
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
