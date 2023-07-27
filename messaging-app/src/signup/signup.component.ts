
import { Component,OnInit } from '@angular/core';
import { FormControl,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'page-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userservice:UsersService,private router:Router) { }
  onsubmit(register: any)
  {
    const user={
      "name": register.value.firstname,
      "emailid":register.value.emailid,
      "password":register.value.Password
    }
    this.userservice.adduser(user).subscribe((data:any) => {
      alert(data.message)
    })
    this.router.navigate(["/login"])
    console.log(user)
  }
}
