import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder ,Validators,FormGroup ,FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserApiService } from '../user-services/user-api.service';

@Component({
  selector: 'app-user-editprofile',
  templateUrl: './user-editprofile.component.html',
  styleUrls: ['./user-editprofile.component.scss']
})
export class UserEditprofileComponent implements OnInit {
 
  qualification = [
    {value: 'B-Tech', viewValue: 'B-Tech'},
    {value: 'MBA', viewValue: 'MBA'},
    {value: 'MCA', viewValue: 'MCA'},
    {value: 'Degree', viewValue: 'Degree'},
  ];

  updateform!:FormGroup;
  ed:any;
  constructor(private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UserEditprofileComponent>,
    private service : UserApiService,
    ){}

  ngOnInit(): void {
    this.updateform = this.fb.group({
      name : new FormControl ('',[Validators.required]),
      password : new FormControl ('',[Validators.required]),
      mobileno : new FormControl ('',[Validators.required]),
      emailid : new FormControl ('',[Validators.required]),
      qualification : new FormControl ('',[Validators.required]),
      dob : new FormControl ('',[Validators.required]),
     });
     this.updateform.patchValue({
      name :this.data.name,
      password : this.data.password,
      mobileno : this.data.mobileno,
      emailid : this.data.emailid,
      qualification : this.data.qualification,
      dob : this.data.dob,
     })
  }
updateProfile(){
  const e ={
      name : this.updateform.get('name')?.value,
      password : this.updateform.get('password')?.value,
      mobileno : this.updateform.get('mobileno')?.value,
      emailid : this.updateform.get('emailid')?.value,
      qualification : this.updateform.get('qualification')?.value,
      dob : this.updateform.get('dob')?.value,
  }
  this.service.EditProfile(this.data._id , e).subscribe(res=>{
    this.ed = res;
    alert("Profile Updated");
    window.location.reload();
    this.dialogRef.close();
  });
}
}
