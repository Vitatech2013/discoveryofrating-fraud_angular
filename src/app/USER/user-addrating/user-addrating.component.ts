import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators , FormControl , FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/ADMIN/Admin-services/api.service';
import { UserApiService } from '../user-services/user-api.service';

@Component({
  selector: 'app-user-addrating',
  templateUrl: './user-addrating.component.html',
  styleUrls: ['./user-addrating.component.scss']
})
export class UserAddratingComponent implements OnInit {
  ratings = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
  ];
  status = [
    {value: 'Bad', viewValue: 'Bad'},
    {value: 'Good', viewValue: 'Good'},
    {value: 'Excellent', viewValue: 'Excellent'},
  ];
apps:any;
user:any;
ratingform!:FormGroup;
constructor(private userservice:UserApiService, private service:ApiService , private fb:FormBuilder){}  
  ngOnInit(): void {
    this.ratingform = this.fb.group({
      username : JSON.parse(localStorage.getItem('token')!).name,
      appname: new FormControl ('',[Validators.required]),
      rating : new FormControl ('',[Validators.required]),
      status : new FormControl ('',[Validators.required])
    })

   this.getapps();
   //this.getUsername();
  }
  
  getUsername(){
    let name=JSON.parse(localStorage.getItem('token')!).name;
  this.user = name;
  }

  getapps(){
    this.service.getApps().subscribe((res)=>{
      console.log(res);
      this.apps = res
    })
  }
addrating(){
  if(this.ratingform.valid){
    this.userservice.PostRating(this.ratingform.value).subscribe((res)=>{
      console.log(res);
      alert("Ratting added successfully");
      window.location.reload();
    });
  }else{
    alert("something went wrong");
  }
}
}
