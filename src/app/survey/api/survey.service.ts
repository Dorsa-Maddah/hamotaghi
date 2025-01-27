import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { sortSurvey } from '../helpers';
import { Survey } from '../models';
import { SurveyRESTService } from './survey.rest.service';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  public readonly questions$ = new BehaviorSubject<Survey.Question[]>([]);

  constructor(private readonly _restService: SurveyRESTService) {}

  public getQuestions(): void {
    this._restService.getQuestions().subscribe({
      next: (response) => {
        this.questions$.next(response);
      },
    });
  }

  public resolveQuestions(): Observable<Survey.Question[]> {
    return this._restService.getQuestions().pipe(
      tap({
        next: (response) => {
          this.questions$.next(sortSurvey(response));
        },
      })
    );
  }
}
