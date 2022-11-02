import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { ToastrModule } from 'ngx-toastr'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component'
import { ValidateOtpComponent } from './validate-otp/validate-otp.component'
import { RestorePasswordComponent } from './restore-password/restore-password.component'
import { UserHomeComponent } from './user-home/user-home.component'
import { NoticeComponent } from './notice/notice.component'
import { NewNoticeComponent } from './new-notice/new-notice.component'
import { NavbarComponent } from './utils/navbar/navbar.component'
import { AdminComponent } from './admin/admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ValidateOtpComponent,
    RestorePasswordComponent,
    UserHomeComponent,
    NoticeComponent,
    NewNoticeComponent,
    NavbarComponent,
    AdminComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
