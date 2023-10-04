import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';
@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule, SharedModule],
  exports: [FormsModule, ReactiveFormsModule],
})
export class OnboardFormModule {
}