import { Component, OnInit ,Inject } from '@angular/core';
import { FormBuilder,Validators,FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../Admin-services/api.service';

@Component({
  selector: 'app-admin-editapps',
  templateUrl: './admin-editapps.component.html',
  styleUrls: ['./admin-editapps.component.scss']
})
export class AdminEditappsComponent implements OnInit {

constructor(private fb:FormBuilder ,  
  @Inject(MAT_DIALOG_DATA) public data: any,
private service:ApiService,
  private dialogRef: MatDialogRef<AdminEditappsComponent>){}
foods = [
  {value: 'Education-0', viewValue: 'Education'},
  {value: 'Games-1', viewValue: 'Games'},
  {value: 'Entertainement-2', viewValue: 'Entertainement'},
  {value: 'Systemapps-2', viewValue: 'Systemapps'},
  {value: 'Shoppingapps-2', viewValue: 'Shoppingapps'},
];
editpostappform!:FormGroup;
ed:any;
  ngOnInit(): void {
    this.editpostappform = this.fb.group({
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
     });
     this.editpostappform.patchValue({
     appname : this.data.appname,
     description : this.data.description,
     category : this.data.category,
     updatedversion : this.data.updatedversion,
     updationdate : this.data.updationdate,
     memorysize : this.data.memorysize,
     language : this.data.language,
     seller : this.data.seller,
     appsprice : this.data.appsprice,
     appsimage : this.data.appsimage,
     uploadapps : this.data.uploadapps
     })
  }
updateTopic(){
  const e = {
    appname : this.editpostappform.get('appname')?.value,
    description : this.editpostappform.get('description')?.value,
    category : this.editpostappform.get('category')?.value,
    updatedversion : this.editpostappform.get('updatedversion')?.value,
    updationdate : this.editpostappform.get('updationdate')?.value,
    memorysize : this.editpostappform.get('memorysize')?.value,
    language : this.editpostappform.get('language')?.value,
    seller : this.editpostappform.get('seller')?.value,
    appsprice : this.editpostappform.get('appsprice')?.value,
    appsimage : this.editpostappform.get('appsimage')?.value,
    uploadapps : this.editpostappform.get('uploadapps')?.value,
  }
  this.service.EditApps(this.data._id,e).subscribe((res)=>{
    this.ed = res;
    alert("updated sucess")
    window.location.reload();
    this.dialogRef.close()
  });

}
}
