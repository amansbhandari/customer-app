import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { take } from "rxjs";
import { CredidApiService } from "../_shared/services/credid-api.services";

@Component({
  selector: "app-onboard-form",
  templateUrl: "./onboard-form.component.html",
  styleUrls: ["./onboard-form.component.scss"],
})
export class OnboardFormComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ["", Validators.required],
    lastCtrl: ["", Validators.required],
    emailCtrl: ["", Validators.required],
    dobCtrl: ["", Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    callCtrl: ["", Validators.required],
    streetCtrl: ["", Validators.required],
    aptCtrl: ["", Validators.required],
    cityCtrl: ["", Validators.required],
    stateCtrl: ["", Validators.required],
    zipCtrl: ["", Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    ssnCtrl: ["", Validators.required],
  });
  isLinear = true;

  constructor(
    private _formBuilder: FormBuilder,
    private credidApiService: CredidApiService
  ) {}

  ngOnInit(): void {}

  submit(): void {
    const firstName = this.firstFormGroup.get("firstCtrl")?.value || "";
    const lastName = this.firstFormGroup.get("lastCtrl")?.value || "";
    const email = this.firstFormGroup.get("emailCtrl")?.value || "";
    const dob = this.firstFormGroup.get("dobCtrl")?.value || "";
    const cellPhone = this.secondFormGroup.get("callCtrl")?.value || "" ;
    const street = this.secondFormGroup.get("streetCtrl")?.value || "";
    const apt = this.secondFormGroup.get("aptCtrl")?.value || "";
    const city = this.secondFormGroup.get("cityCtrl")?.value || "";
    const state = this.secondFormGroup.get("stateCtrl")?.value || "";
    const zip = this.secondFormGroup.get("zipCtrl")?.value || "";
    const ssn = this.thirdFormGroup.get("ssnCtrl")?.value || "";
    const did = "did:example:" + firstName?.replace(/\s/g, "_");

    this.credidApiService
      .createUser({
        firstName,
        lastName,
        email,
        dob,
        cellPhone,
        street,
        apt,
        city,
        state,
        zip,
        ssn,
      }, did)
      .pipe(take(1))
      .subscribe({
        next: () => {
          alert("Added");
        },

        error: () => {
          alert("error ");
        },
      });
  }
}
