import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }


AdminLogin(username:any,password:any){
  return this.http.get<any>(`http://localhost:5987/admin/adminlogin?username=${username}&password=${password}`)
}
PostApps(data:any){
  return this.http.post<any>(`http://localhost:5987/admin/postApps`, data)
}
getApps(){
  return this.http.get(`http://localhost:5987/admin/viewPostedApps`)
}
getUser(){
  return this.http.get(`http://localhost:5987/admin/viewusers`)
}
GetFeedback(){
  return this.http.get<any>(`http://localhost:5987/admin/viewFeedBack`)
}
GetRating(){
  return this.http.get<any>(`http://localhost:5987/admin/viewRating`)
}
EditApps(id:any , data:any){
  return this.http.put<any>(`http://localhost:5987/admin/`+id ,data );
}
DeleteApps(id:any){
  return this.http.delete<any>(`http://localhost:5987/admin/`+id)
}

}
