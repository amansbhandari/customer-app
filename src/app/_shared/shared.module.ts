import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { CredidApiService } from './services/credid-api.services';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, MatIconModule, TranslateModule],
  declarations: [
  ],
  exports: [
    RouterModule,
    CommonModule,
    TranslateModule,
    MatIconModule,
    ReactiveFormsModule
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        CredidApiService
      ],
    };
  }

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
  
  }
}
