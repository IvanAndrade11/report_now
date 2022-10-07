import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminComponent } from '../app/admin/admin.component'
import { HomeComponent } from '../app/home/home.component'
import { RegisterComponent } from '../app/register/register.component'
import { ValidateOtpComponent } from '../app/validate-otp/validate-otp.component'
import { RestorePasswordComponent } from '../app/restore-password/restore-password.component'
import { UserHomeComponent } from './user-home/user-home.component'
import { NoticeComponent } from './notice/notice.component'
import { NewNoticeComponent } from './new-notice/new-notice.component'

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'validate-otp', component: ValidateOtpComponent },
  { path: 'restablecer', component: RestorePasswordComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'notice', component: NoticeComponent },
  { path: 'new-notice', component: NewNoticeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
