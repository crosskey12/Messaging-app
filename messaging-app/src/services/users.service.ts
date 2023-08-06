import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient:HttpClient) { }
  getusers(object:any) //Chat page left panel
  {
    return this.httpclient.post("http://localhost:3000/api/users",object)
  }
  getmessages(object:any) //Chat page right panel
  {
    return this.httpclient.post("http://localhost:3000/api/chat",object)
  }
  newmessage(object:any) //Chat page new message function
  {
    return this.httpclient.post("http://localhost:3000/api/chatting",object)
  }
  adduser(object:any) //From signup page
  {
    return this.httpclient.post("http://localhost:3000/api/adduser",object)
  }
  login(object:any)   //From login page
  {
    return this.httpclient.post("http://localhost:3000/api/login",object)
  }
  logout(object:any)  //From chat page
  {
    return this.httpclient.post("http://localhost:3000/api/logout",object)
  }
}
