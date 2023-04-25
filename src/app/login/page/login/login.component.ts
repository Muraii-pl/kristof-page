import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../common/core/services/LocalStorageService';
import { LoginService } from '../../../common/core/services/LoginService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  private readonly _loginFormFields = {
    login: ['', Validators.required],
    password: ['', Validators.required]
  }

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _loginService: LoginService,
    private readonly _localStorageService: LocalStorageService,
    private readonly _router: Router,
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this._formBuilder.group(this._loginFormFields);
  }

  public login(): void {
    this._loginService.login(this.loginForm.value).subscribe(res => {
      if (res) {
        this._localStorageService.setValue('token', res);
        this._router.navigateByUrl('/')

      }
    })
  }

}
