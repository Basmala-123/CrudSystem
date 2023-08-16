import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !:FormGroup;
constructor(
  private fb:FormBuilder ,
  private service:AuthService, 
  private toaster:ToastrService,
  private route:Router
  ){}
  ngOnInit(): void { 
    this.createForm();
  }
createForm(){
  this.loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
    role:"admin"
  })
}
submit(){
  this.service.login(this.loginForm.value).subscribe((res: any)=>{
    this.toaster.success("success","Login Success");
    this.route.navigate(['/tasks'])
  },err=>{
    this.toaster.error(err.error.message)
  } )
  }
  




}
