import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SurveyService } from '../api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SurveyStatusGuard implements CanActivate {
  constructor(
    private readonly _surveyService: SurveyService,
    private readonly _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._surveyService.checkSurvey().pipe(
      map((response) => {
        if (response.completed) {
          return this._router.parseUrl('/profile/room/suggested');
        }

        return true;
      })
    );
  }
}
