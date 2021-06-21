import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { delay, switchMap } from "rxjs/operators";

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
    private http: HttpClient,
  ) {
  }

  public ngOnInit() {
    this.signUpForm = this.fb.group({
      username: ['inepipenko', this.baseValidators, this.uniqueUsernameValidator.bind(this)],
      emails: this.fb.array([this.fb.group({
        email: [],
        public: [true]
      })]),
      male: [true],
      ps: this.fb.group({
        password: this.fb.control('', this.baseValidators),
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

  public getControl(group: FormGroup, path: string): FormControl {
    return group.get(path) as FormControl;
  }

  public getArrayControl(group: FormGroup, path: string): FormGroup[] {
    return (group.get(path) as FormArray).controls as FormGroup[];
  }

  public addEmail(): void {
    (this.signUpForm.get('emails') as FormArray).push(this.fb.group({
      email: [],
      public: [true]
    }));
  }

  public removeEmail(index: number): void {
    (this.signUpForm.get('emails') as FormArray).removeAt(index);
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

  private uniqueUsernameValidator({value: username}: AbstractControl): Observable<ValidationErrors | null> {
    console.log(username);
    return of(username)
      .pipe(delay(500),
        switchMap(() => {
          return this.http.post('/auth/checkUsername', {username})
            .pipe(delay(5000))
        }))

  }
}
