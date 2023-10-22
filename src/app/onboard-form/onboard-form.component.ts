import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { take } from "rxjs";
import * as intlTelInput from "intl-tel-input";

import { CredidApiService } from "../_shared/services/credid-api.services";

@Component({
  selector: "app-onboard-form",
  templateUrl: "./onboard-form.component.html",
  styleUrls: ["./onboard-form.component.scss"],
})
export class OnboardFormComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ["", Validators.required],
    middleCtrl: ["", Validators.required],
    lastCtrl: ["", Validators.required],
    emailCtrl: ["", Validators.required],
    dobCtrl: ["", Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    callCtrl: ["", Validators.required, Validators.pattern("[- +()0-9]+")],
    streetCtrl: ["", Validators.required],
    aptCtrl: ["", Validators.required],
    cityCtrl: ["", Validators.required],
    stateCtrl: ["", Validators.required],
    countryCtrl: ["", Validators.required],
    zipCtrl: ["", Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    ssnCtrl: ["", Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    empNameCtrl: ["", Validators.required],
    empJobTitle: ["", Validators.required],
    empStartDateCtrl: ["", Validators.required],
    empEndDateCtrl: ["", Validators.required],
  });

  isLinear = true;

  constructor(
    private _formBuilder: FormBuilder,
    private credidApiService: CredidApiService
  ) {}

  ngOnInit(): void {
    const inputElement = document.getElementById("#phone");
    if (inputElement) {
      intlTelInput(inputElement, {
        initialCountry: "US",
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });
    }
  }

  submit(): void {
    const firstName = this.firstFormGroup.get("firstCtrl")?.value || "";
    const middleName = this.firstFormGroup.get("middleCtrl")?.value || "";
    const lastName = this.firstFormGroup.get("lastCtrl")?.value || "";

    const emailAddress = this.firstFormGroup.get("emailCtrl")?.value || "";
    const localPart = emailAddress?.split("@")[0];

    const completeDateOfBirth = this.firstFormGroup.get("dobCtrl")?.value || "";
    const dobArr = completeDateOfBirth?.split("/");
    const dayOfBirth = dobArr[1];
    const monthOfBirth = dobArr[0];
    const yearOfBirth = dobArr[2];

    const msisdn = this.secondFormGroup.get("callCtrl")?.value || "";
    const countryCode = msisdn?.substring(0, 1);
    const areaCode = msisdn?.substring(1, 4);
    const mobileNumber = msisdn?.substring(4, msisdn.length);

    const streetAddress = this.secondFormGroup.get("streetCtrl")?.value || "";
    const aptSuiteNumber = this.secondFormGroup.get("aptCtrl")?.value || "";
    const addressLocality = this.secondFormGroup.get("cityCtrl")?.value || "";
    const addressRegion = this.secondFormGroup.get("stateCtrl")?.value || "";
    const addressCountry = this.secondFormGroup.get("countryCtrl")?.value || "";
    const postalCode = this.secondFormGroup.get("zipCtrl")?.value || "";

    const socialSecurityNumber =
      this.thirdFormGroup.get("ssnCtrl")?.value || "";
    const last4digits = socialSecurityNumber.substring(
      socialSecurityNumber.length - 5,
      socialSecurityNumber.length
    );

    const employerName = this.thirdFormGroup.get("empNameCtrl")?.value || "";
    const jobTitle = this.thirdFormGroup.get("empJobTitle")?.value || "";
    const employmentStartDate =
      this.thirdFormGroup.get("empStartDateCtrl")?.value || "";
    const employmentEndDate =
      this.thirdFormGroup.get("empEndDateCtrl")?.value || "";

    const did = "did:example:" + firstName?.replace(/\s/g, "_");

    this.credidApiService
      .createUser(
        {
          firstName,
          middleName,
          lastName,
          emailAddress,
          localPart,
          dayOfBirth,
          monthOfBirth,
          yearOfBirth,
          completeDateOfBirth,
          countryCode,
          areaCode,
          mobileNumber,
          msisdn,
          streetAddress,
          aptSuiteNumber,
          addressLocality,
          addressRegion,
          addressCountry,
          postalCode,
          socialSecurityNumber,
          last4digits,
          employerName,
          jobTitle,
          employmentStartDate,
          employmentEndDate,
        },
        did
      )
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
