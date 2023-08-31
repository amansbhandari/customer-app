import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardFormComponent } from './onboard-form/onboard-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
    ],
  },
  {
    path: 'onboard',
    component: OnboardFormComponent,
    children: [
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
