import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './ADMIN/admin-login/admin-login.component';
import { AdminNavbarComponent } from './ADMIN/admin-navbar/admin-navbar.component';
import { AdminPostappsComponent } from './ADMIN/admin-postapps/admin-postapps.component';
import { AdminViewappsComponent } from './ADMIN/admin-viewapps/admin-viewapps.component';
import { AdminViewfeedbackComponent } from './ADMIN/admin-viewfeedback/admin-viewfeedback.component';
import { AdminViewratingComponent } from './ADMIN/admin-viewrating/admin-viewrating.component';
import { AdminViewuserComponent } from './ADMIN/admin-viewuser/admin-viewuser.component';
import { WelcomeComponent } from './HOME/welcome/welcome.component';
import { UserAddfeedbackComponent } from './USER/user-addfeedback/user-addfeedback.component';
import { UserAddratingComponent } from './USER/user-addrating/user-addrating.component';
import { UserLoginComponent } from './USER/user-login/user-login.component';
import { UserNavbarComponent } from './USER/user-navbar/user-navbar.component';
import { UserPostedappComponent } from './USER/user-postedapp/user-postedapp.component';
import { UserProfileComponent } from './USER/user-profile/user-profile.component';
import { UserSignupComponent } from './USER/user-signup/user-signup.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path:'' , redirectTo:'welcome' ,pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent,
 
},
  {path:'admin-login',component:AdminLoginComponent,
},
  {path:'admin-navbar',component:AdminNavbarComponent,

  children:[
    {path:'' , redirectTo:'admin-viewusers' ,pathMatch:'full'},
    {path:'admin-viewusers', component:AdminViewuserComponent},
    {path:'admin-postapp', component:AdminPostappsComponent},
    {path:'admin-viewpostapp', component:AdminViewappsComponent},
    {path:'admin-viewfeedback', component:AdminViewfeedbackComponent},
    {path:'admin-viewrating', component:AdminViewratingComponent},
]
},
  {path:'user-register',component:UserSignupComponent,

},
  {path:'user-login' , component:UserLoginComponent},
  {path:'user-navbar',component:UserNavbarComponent,
  canActivate: [AuthGuard],
  children:[
    {path:'' , redirectTo:'admin-userprofile' ,pathMatch:'full'},
    {path:'user-profile' , component:UserProfileComponent},
    {path:'user-viewapps' , component:UserPostedappComponent},
    {path:'user-feedback' , component:UserAddfeedbackComponent},
    {path:'user-rating' , component:UserAddratingComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
