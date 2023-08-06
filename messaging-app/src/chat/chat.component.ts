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
selected={name:" ", //Setting selected user data null initially
emailid:" ",
}

contacts :any; //object to store fetched data
messages1: any; //object to store fetched data
ourid1=ourid //object to store frontend data


getusershere(object:any) //Call service function and sets user list
{
  this.userservice.getusers(object).subscribe((data:any) => {
    this.contacts=data.users
  })
}
getmessagehere(object:any) //Calls service function and sets Messages list
{
  this.userservice.getmessages(object).subscribe((data:any) => {
    this.messages1=data.messages
  })
}
sendmessage(object:any) //Calls service function to save new message 
{
  this.userservice.newmessage(object).subscribe((data:any) => {
    this.getmessagehere({senderid:ourid.name,
      recieverid:this.selected.name})
    })
}

x=this.getusershere(ourid)

//Function to change data in right panel based on user selection in left panel 
selection(con:any):void{
      this.selected.name=con.name
      this.selected.emailid=con.emailid
      const object={
          senderid:ourid.name,
          recieverid:this.selected.name 
      }
      this.getmessagehere(object)   

  }

  //For entering new message
  submit(msg:any)
  {
    const newmessage={
        senderid:ourid.name,
        recieverid:this.selected.name,
        message:msg.value.message
    }
    msg.resetForm();
    this.sendmessage(newmessage)
  }

  logout()
  {
    this.userservice.logout(ourid).subscribe()
    ourid.name=""
    ourid.email=""
    this.router.navigate(["/login"])
  }
}