import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Admin-services/api.service';

@Component({
  selector: 'app-admin-viewfeedback',
  templateUrl: './admin-viewfeedback.component.html',
  styleUrls: ['./admin-viewfeedback.component.scss']
})
export class AdminViewfeedbackComponent implements OnInit {


constructor(private service:ApiService){}

feedback:any;

  ngOnInit(): void {
  this.getfeedback();
  }
getfeedback(){
  this.service.GetFeedback().subscribe((res)=>{
    this.feedback = res;
  })
}
}
