import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  nombre!: string;
  email!: string;
  direccion!: string;
  telefono!: number;
  password!:string;
  confirmpassword!: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.nombre);
    console.log(this.password);
  };

 }


