import { Component,OnInit } from '@angular/core';
import { FormControl,FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ourid } from 'src/home/database';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userservice:UsersService,private router:Router) {}
 
  loginhere(object:any) //Set the logged in user data and reroutes 
  {
    this.userservice.login(object).subscribe((data:any) => {
      if(data.user.name)
      {
        ourid.name=data.user.name
        ourid.email=data.user.emailid
        this.router.navigate(["/chat"])
      }
      else
      {
        alert(data.message) //If login insuccessful appropriate message is declared
      }
    })
  }





  submit(login: any)
  {
    const object={
      "emailid":login.value.emailid,
      "password":login.value.Password
    }
    this.loginhere(object)
  }
}