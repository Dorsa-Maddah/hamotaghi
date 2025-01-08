import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from 'src/app/shared/api';
import { Auth } from '../models';
import { AuthRESTService } from './auth.rest.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly isAuthorized$ = new BehaviorSubject<boolean>(
    !!this._storageService.getAccessToken()
  );

  constructor(
    private readonly _storageService: StorageService,
    private readonly _restService: AuthRESTService,
    private readonly _router: Router
  ) {}

  public login(dto: Auth.LoginDto): void {
    this._restService.login(dto).subscribe({
      next: (response) => {
        this._storageService.setAccessToken(response.access);
        this._storageService.setRefreshToken(response.refresh);
        this.isAuthorized$.next(true);
        this._router.navigateByUrl('/profile');
      },
      error: () => {
        this.isAuthorized$.next(false);
      },
    });
  }

  public logout(): void {
    this._storageService.removeAccessToken();
    this._storageService.removeRefreshToken();
    this.isAuthorized$.next(false);
    this._router.navigateByUrl('/auth/login');
  }
}
