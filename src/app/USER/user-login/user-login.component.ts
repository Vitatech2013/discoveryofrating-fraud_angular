import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../user-services/user-api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{
  userloginform!:FormGroup;
constructor(private fb:FormBuilder,private service:UserApiService,public router:Router){}
  ngOnInit(): void {
  this.userloginform = this.fb.group({
    Username : new FormControl ('',[Validators.required]),
    Password : new FormControl ('',[Validators.required])
  })
  }
userlogin(){
  let name = this.userloginform.get('Username')?.value;
  let password = this.userloginform.get('Password')?.value;

  this.service.GetUser(name,password).subscribe((res)=>{
    if (res) {
      localStorage.setItem('token',JSON.stringify(res))
      alert("Login Success")
      this.router.navigate(['/user-navbar/user-profile']);
    } else {
      alert('Inavalid Credentials');
    }
  })
}

}
