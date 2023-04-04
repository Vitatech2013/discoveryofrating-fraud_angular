import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-services/user-api.service';
import { MatDialog } from '@angular/material/dialog';
import { UserEditprofileComponent } from '../user-editprofile/user-editprofile.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{

constructor(private service:UserApiService , private dialog:MatDialog){}
user:any;
  ngOnInit(): void {
    this.getprofile();
  }
getprofile(){
  let name=JSON.parse(localStorage.getItem('token')!).name;
  this.service.GetuserProfile(name).subscribe((res:any)=>{
    console.log(res);
    res.filter((x:any)=>{
      this.user = x
      console.log(this.user);
      
    })    
   })
}
editprofile(e:any){
  this.dialog.open(UserEditprofileComponent,{
    width:"50%",
    data:e
  })
}

}
