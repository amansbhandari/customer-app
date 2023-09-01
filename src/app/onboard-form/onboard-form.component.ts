import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-onboard-form',
  templateUrl: './onboard-form.component.html',
  styleUrls: ['./onboard-form.component.scss']
})
export class OnboardFormComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    lastCtrl: ['', Validators.required],
    emailCtrl: ['', Validators.required],
    dobCtrl: ['', Validators.required],

  });
  secondFormGroup = this._formBuilder.group({
    callCtrl: ['', Validators.required],
    streetCtrl: ['', Validators.required],
    aptCtrl: ['', Validators.required],
    cityCtrl: ['', Validators.required],
    stateCtrl: ['', Validators.required],
    zipCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    ssnCtrl: ['', Validators.required],
  });
  isLinear = true;

  constructor(private _formBuilder: FormBuilder) {}

}
