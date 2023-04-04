import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(public http:HttpClient) { }
GetuserProfile(name:any){
  return this.http.get<any>(`http://localhost:5987/user/viewprofile?name=`+name)
}
PostUserRegister(data:any){
  return this.http.post<any>(`http://localhost:5987/user/registration` , data)
}
GetUser(name:any,password:any){
  return this.http.get<any>(`http://localhost:5987/user/userlogin?name=` +name +'&password=' +password)
}

AddFeedback(data:any){
  return this.http.post<any>(`http://localhost:5987/user/userfeedback`,data)
}
PostRating(data:any){
  return this.http.post<any>(`http://localhost:5987/user/appsRating` , data)
}
EditProfile(id:any,data:any){
  return this.http.put<any>(`http://localhost:5987/user/updateprofile/` +id ,data)
}
isLoggedin():boolean{
  return !!localStorage.getItem('token')
}
getuser(){
  return JSON.parse(localStorage.getItem('token')!)
}
}
