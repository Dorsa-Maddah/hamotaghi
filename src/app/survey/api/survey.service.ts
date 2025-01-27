import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { sortSurvey } from '../helpers';
import { Survey } from '../models';
import { SurveyRESTService } from './survey.rest.service';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  public readonly questions$ = new BehaviorSubject<Survey.Question[]>([]);
  public readonly submissionDto$ =
    new BehaviorSubject<Survey.SurveySubmissionDto>({});
  public readonly areAllQuestionsAnswered$ = combineLatest([
    this.questions$,
    this.submissionDto$,
  ]).pipe(
    map(([questions, submissionDto]) => {
      return questions.every((question) => {
        return submissionDto[question?.id?.toString()] !== undefined;
      });
    })
  );

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

  public handleChoiceSelected(questionId: number, choiceId: number) {
    const _submissionDto = this.submissionDto$.getValue();

    _submissionDto[questionId.toString()] = choiceId > 0 ? choiceId : undefined;

    this.submissionDto$.next(_submissionDto);
  }
}
