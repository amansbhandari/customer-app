import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from 'src/app/layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
