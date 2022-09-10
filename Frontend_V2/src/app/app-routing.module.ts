import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../app/home/home.component'
import { RegisterComponent } from '../app/register/register.component'
import { ValidateOtpComponent } from '../app/validate-otp/validate-otp.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'validate-otp', component: ValidateOtpComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
