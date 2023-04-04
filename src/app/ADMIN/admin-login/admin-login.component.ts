import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Admin-services/api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  adminloginform!: FormGroup;
 
  constructor(public fb:FormBuilder , public service:ApiService ,public router:Router){}
  ngOnInit(): void {
    this.adminloginform = this.fb.group({
      uname : new FormControl('',[Validators.required]),
      pwd : new FormControl('',[Validators.required]),
     // email: new FormControl('admin@gmail.com',[Validators.required]),
    })
   // this.adminlogin();
  }
  
adminlogin(){
  let username = this.adminloginform.get('uname')?.value;
  let password = this.adminloginform.get('pwd')?.value;

  this.service.AdminLogin(username,password).subscribe((res)=>{
 if (res) {
      localStorage.setItem('admin',JSON.stringify(res.body));
      
      alert('success');
      this.router.navigate(['/admin-navbar']);
    }else{
      alert("Invalid credentials")
    }
  })
}
}