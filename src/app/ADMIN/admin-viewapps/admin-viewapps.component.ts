import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Admin-services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminEditappsComponent } from '../admin-editapps/admin-editapps.component';

@Component({
  selector: 'app-admin-viewapps',
  templateUrl: './admin-viewapps.component.html',
  styleUrls: ['./admin-viewapps.component.scss']
})

export class AdminViewappsComponent implements OnInit {
  app: any;

constructor(public service:ApiService , private dialog:MatDialog){}
  ngOnInit(): void {
    this.GetApp();
  }
  GetApp(){
    this.service.getApps().subscribe((res)=>{
      console.log(res);
      this.app = res
    })
  }
  editapp(e:any){
    this.dialog.open(AdminEditappsComponent,{
      width:"60%",
      data:e
    })
  }
  deleteapp(e:any){
 this.service.DeleteApps(e).subscribe(res=>{
  alert('successfully deleted');
  window.location.reload();
 })
  }
}
