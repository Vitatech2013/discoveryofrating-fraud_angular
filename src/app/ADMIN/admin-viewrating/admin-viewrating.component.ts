import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Admin-services/api.service';

@Component({
  selector: 'app-admin-viewrating',
  templateUrl: './admin-viewrating.component.html',
  styleUrls: ['./admin-viewrating.component.scss']
})
export class AdminViewratingComponent implements OnInit {

constructor(private service:ApiService){}

rating:any;

  ngOnInit(): void {
    this.getrating();
  }

getrating(){
  this.service.GetRating().subscribe((res)=>{
    this.rating = res;
  })
}  


}
