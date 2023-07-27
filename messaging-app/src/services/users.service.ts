import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient:HttpClient) { }
  getusers(object:any)
  {
    return this.httpclient.post("http://localhost:3000/api/messages/users",object)
  }
  getmessages(object:any)
  {
    return this.httpclient.post("http://localhost:3000/api/messages/chat",object)
  }
  newmessage(object:any)
  {
    return this.httpclient.post("http://localhost:3000/api/messages/chatting",object)
  }
  adduser(object:any)
  {
    return this.httpclient.post("http://localhost:3000/api/messages/adduser",object)
  }
  login(object:any)
  {
    return this.httpclient.post("http://localhost:3000/api/messages/login",object)
  }
  logout(object:any)
  {
    return this.httpclient.post("http://localhost:3000/api/messages/logout",object)
  }
}
