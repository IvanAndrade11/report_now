import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../app/home/home.component'
import { RegisterComponent } from '../app/register/register.component'
import { ValidateOtpComponent } from '../app/validate-otp/validate-otp.component'
import { RestorePasswordComponent } from '../app/restore-password/restore-password.component'
import { UserHomeComponent } from './user-home/user-home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'validate-otp', component: ValidateOtpComponent },
  { path: 'restablecer', component: RestorePasswordComponent },
  { path: 'user-home', component: UserHomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
