import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';
import { ApiService } from '../Admin-services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-postapps',
  templateUrl: './admin-postapps.component.html',
  styleUrls: ['./admin-postapps.component.scss']
})
export class AdminPostappsComponent implements OnInit{
  foods = [
    {value: 'Education', viewValue: 'Education'},
    {value: 'Games', viewValue: 'Games'},
    {value: 'Entertainement', viewValue: 'Entertainement'},
    {value: 'Systemapps', viewValue: 'Systemapps'},
    {value: 'Shoppingapps', viewValue: 'Shoppingapps'},
  ];
  postappform!:FormGroup;
  constructor(private fb:FormBuilder , private service:ApiService , private router:Router){}
url:any;
  ngOnInit(): void {

   this.postappform = this.fb.group({
    appname : new FormControl ('',[Validators.required]),
    description : new FormControl ('',[Validators.required]),
    category : new FormControl ('',[Validators.required]),
    updatedversion : new FormControl ('',[Validators.required]),
    updationdate : new FormControl ('',[Validators.required]),
    memorysize : new FormControl ('',[Validators.required]),
    language : new FormControl ('',[Validators.required]),
    seller : new FormControl ('',[Validators.required]),
    appsprice : new FormControl ('',[Validators.required]),
    appsimage : new FormControl ('',[Validators.required]),
    uploadapps : new FormControl ('',[Validators.required])
   })
  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target?.result;
      }
    }
  }

apppost(){
  let data={
    ...this.postappform.value,
    appsimage:this.url
  }
 if(this.postappform.valid){
  this.service.PostApps(this.postappform.value).subscribe((res)=>{
    console.log(res);
    alert("Success");
    this.router.navigate(['/admin-navbar/admin-viewpostapp']);
 
  })
 }else{
  alert('Something went wrong')
 }
}
}
