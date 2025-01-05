import { Injectable } from '@angular/core';
import { AbstractRESTService } from 'src/app/shared/api';
import { Auth } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthRESTService extends AbstractRESTService {
  public login(dto: Auth.LoginDto): Observable<Auth.LoginResponse> {
    const _url = `${this._serverUrl}/api/token/`;

    return this._http.post<Auth.LoginResponse>(_url, dto, {
      headers: this.setHeaders(),
    });
  }
}
