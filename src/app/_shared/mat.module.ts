import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

const matImports = [
  MatToolbarModule,
];

@NgModule({
  imports: matImports,
  exports: matImports,
})
export class MatModule {}
