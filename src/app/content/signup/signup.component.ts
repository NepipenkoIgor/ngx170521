import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AbstractControl,FormControl FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";

@Component({
  selector: 'course-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm!: FormGroup;

  private baseValidators = [Validators.required, Validators.minLength(6)];

  public constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  public ngOnInit() {
    this.signUpForm = this.fb.group({
      username: ['inepipenko', this.baseValidators],
      ps: this.fb.group({
        password: ['', this.baseValidators],
        cpassword: ['', this.baseValidators]
      }, {validators: [this.equalValidator]})
    })
  }


  public goToLogin(): void {
    this.router.navigate(['/login'])
  }

  public signup() {
    console.log(this.signUpForm.value)
  }

  private equalValidator({value: {password, cpassword}}: AbstractControl): ValidationErrors | null {
    console.log(this);
    const isValid = password === cpassword;
    return isValid
      ? null
      : {
        isNotEqual: true
      }
  }
}

