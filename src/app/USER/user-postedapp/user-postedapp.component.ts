import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/ADMIN/Admin-services/api.service';

@Component({
  selector: 'app-user-postedapp',
  templateUrl: './user-postedapp.component.html',
  styleUrls: ['./user-postedapp.component.scss']
})
export class UserPostedappComponent implements OnInit{
  aapp: any;

  constructor(private service :ApiService){}
  ngOnInit(): void {
    this.GetApp();
  }
  GetApp(){
    this.service.getApps().subscribe((res)=>{
      console.log(res);
      this.aapp = res
    })
  }

}
