import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ourid } from 'src/home/database';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'page-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  constructor(private userservice:UsersService, private router:Router){}
selected={name:" ",
//avatar:" ",
emailid:" ",
//phno:""
}

contacts :any;
messages1: any; 
ourid1=ourid


getusershere(object:any)
{
  this.userservice.getusers(object).subscribe((data:any) => {
    this.contacts=data.users
  })
}
getmessagehere(object:any)
{
  this.userservice.getmessages(object).subscribe((data:any) => {
    this.messages1=data.messages
  })
}
sendmessage(object:any)
{
  this.userservice.newmessage(object).subscribe((data:any) => {
    this.getmessagehere({senderid:ourid.name,
      recieverid:this.selected.name})
    })
}
//contacts = contactsdb
x=this.getusershere(ourid)
//messages1= messagesdb
  selection(con:any):void{
      this.selected.name=con.name
      //this.selected.avatar=con.avatar
      this.selected.emailid=con.emailid
      //this.selected.phno=con.phno
      const object={
          senderid:ourid.name,
          recieverid:this.selected.name 
      }
      this.getmessagehere(object)

  }
  submit(msg:any)
  {
    const newmessage={
        senderid:ourid.name,
        recieverid:this.selected.name,
        message:msg.value.message
    }
    msg.resetForm();
    this.sendmessage(newmessage)
    //console.log(newmessage)
    //alert("Message sent successfully")


  }

  logout()
  {
    this.userservice.logout(ourid).subscribe()
    ourid.name=""
    ourid.email=""
    this.router.navigate(["/login"])
  }
}