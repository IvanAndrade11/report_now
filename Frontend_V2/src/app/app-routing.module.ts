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

import { AuthService } from './guards/auth.service'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restablecer', component: RestorePasswordComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'validate-otp', component: ValidateOtpComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthService] },
  {
    path: 'user-home',
    component: UserHomeComponent,
    canActivate: [AuthService]
  },
  { path: 'notice', component: NoticeComponent, canActivate: [AuthService] },
  {
    path: 'new-notice',
    component: NewNoticeComponent,
    canActivate: [AuthService]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
