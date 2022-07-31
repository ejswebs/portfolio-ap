import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: 'portfolio', component: BodyComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
