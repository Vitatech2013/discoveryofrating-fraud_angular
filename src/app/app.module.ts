import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './ADMIN/admin-login/admin-login.component';
import { AdminViewuserComponent } from './ADMIN/admin-viewuser/admin-viewuser.component';
import { AdminPostappsComponent } from './ADMIN/admin-postapps/admin-postapps.component';
import { AdminViewappsComponent } from './ADMIN/admin-viewapps/admin-viewapps.component';
import { AdminViewfeedbackComponent } from './ADMIN/admin-viewfeedback/admin-viewfeedback.component';
import { AdminViewratingComponent } from './ADMIN/admin-viewrating/admin-viewrating.component';
import { UserSignupComponent } from './USER/user-signup/user-signup.component';
import { UserLoginComponent } from './USER/user-login/user-login.component';
import { UserPostedappComponent } from './USER/user-postedapp/user-postedapp.component';
import { UserAddfeedbackComponent } from './USER/user-addfeedback/user-addfeedback.component';
import { UserAddratingComponent } from './USER/user-addrating/user-addrating.component';
import { WelcomeComponent } from './HOME/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavbarComponent } from './ADMIN/admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './USER/user-navbar/user-navbar.component';
import { UserProfileComponent } from './USER/user-profile/user-profile.component';
import { AdminEditappsComponent } from './ADMIN/admin-editapps/admin-editapps.component';
import { UserEditprofileComponent } from './USER/user-editprofile/user-editprofile.component';
//-->components
 
import { LayoutModule } from '@angular/cdk/layout';
import { NgmaterialModule } from './ngmaterial/ngmaterial.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './Guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminViewuserComponent,
    AdminPostappsComponent,
    AdminViewappsComponent,
    AdminViewfeedbackComponent,
    AdminViewratingComponent,
    UserSignupComponent,
    UserLoginComponent,
    UserPostedappComponent,
    UserAddfeedbackComponent,
    UserAddratingComponent,
    WelcomeComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    UserProfileComponent,
    AdminEditappsComponent,
    UserEditprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgmaterialModule,
    HttpClientModule,

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
