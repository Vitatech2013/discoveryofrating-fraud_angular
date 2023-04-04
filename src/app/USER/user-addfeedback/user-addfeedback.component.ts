import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/ADMIN/Admin-services/api.service';
import { UserApiService } from '../user-services/user-api.service';

@Component({
  selector: 'app-user-addfeedback',
  templateUrl: './user-addfeedback.component.html',
  styleUrls: ['./user-addfeedback.component.scss']
})
export class UserAddfeedbackComponent implements OnInit{
  feedbackform!:FormGroup
apps:any;
constructor(private service:ApiService,private userservice:UserApiService,private fb:FormBuilder){}
user:any;
  ngOnInit(): void {
   this.feedbackform = this.fb.group({
   username : JSON.parse(localStorage.getItem('token')!).name,
    appname : new FormControl ('',[Validators.required]),
    feedback : new FormControl ('',[Validators.required]),
    date : new FormControl ('',[Validators.required])
    })

   this.getapps();
   this.getUsername();
  }

getapps(){
  this.service.getApps().subscribe((res)=>{
    console.log(res);
    this.apps = res
  })
}
getUsername(){

  let name=JSON.parse(localStorage.getItem('token')!).name;
  this.user = name

}
addfeedback(){
  if(this.feedbackform.valid){
    this.userservice.AddFeedback(this.feedbackform.value).subscribe((res)=>{
      console.log(res);
      
      alert("Feedback Added successfully");
      window.location.reload();
    })
  }else{
    alert("Something Went Wrong")
  }
}
}
