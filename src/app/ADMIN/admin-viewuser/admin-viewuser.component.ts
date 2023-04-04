import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Admin-services/api.service';

@Component({
  selector: 'app-admin-viewuser',
  templateUrl: './admin-viewuser.component.html',
  styleUrls: ['./admin-viewuser.component.scss']
})
export class AdminViewuserComponent implements OnInit{
 
 user:any 

constructor(private service:ApiService){}

  ngOnInit(): void {
   this.viewUsers();
  }
viewUsers(){
  this.service.getUser().subscribe((res)=>{
    console.log(res);
    this.user = res;
  })
}
}
