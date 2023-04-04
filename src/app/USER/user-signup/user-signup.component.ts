import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup, FormControl } from '@angular/forms';
import { UserApiService } from '../user-services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  userregisterform!:FormGroup;

  qualification = [
    {value: 'B-Tech', viewValue: 'B-Tech'},
    {value: 'MBA', viewValue: 'MBA'},
    {value: 'MCA', viewValue: 'MCA'},
    {value: 'Degree', viewValue: 'Degree'},
  ];
constructor(private fb:FormBuilder,private service:UserApiService,private router : Router){}

  ngOnInit(): void {
   this.userregisterform = this.fb.group({
    name : new FormControl ('',[Validators.required]),
    password : new FormControl ('',[Validators.required]),
    mobileno : new FormControl ('',[Validators.required]),
    emailid : new FormControl ('',[Validators.required]),
    qualification : new FormControl ('',[Validators.required]),
    dob : new FormControl ('',[Validators.required]),
   })
  }

  Register(){
    if(this.userregisterform.valid){
      this.service.PostUserRegister(this.userregisterform.value).subscribe((res)=>{
        alert("Register Success");
      });
      this.router.navigate(['/user-login'])
    }
    else{
      alert("something fishy")
    }
  }
}
