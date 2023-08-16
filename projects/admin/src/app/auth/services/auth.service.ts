import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(private http:HttpClient) { }
  login(model:login){
    return this.http.post('https://crudsystem-52w6.onrender.com/auth/login',model)
  }
}
