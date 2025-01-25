import { Injectable } from '@angular/core';
import { SurveyRESTService } from './survey.rest.service';
import { BehaviorSubject } from 'rxjs';
import { Survey } from '../models';

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
}
