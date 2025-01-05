import { Component } from '@angular/core';
import { AuthRESTService } from '../../api/auth.rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public readonly formGroup: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _restService: AuthRESTService
  ) {
    this.formGroup = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public handleLogin(): void {
    this._restService.login(this.formGroup.value).subscribe();
  }
}
