import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login.component';
import { ChatComponent } from 'src/chat/chat.component';
import { SignupComponent } from 'src/signup/signup.component';

const routes: Routes = [
  { path : '',pathMatch:'full',redirectTo:'login'},
  { path:'login', component : LoginComponent},
  { path:'signup', component : SignupComponent},
  { path:'chat', component : ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
