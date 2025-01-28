import { TestBed } from '@angular/core/testing';

import { SurveyStatusGuard } from './survey-status.guard';

describe('SurveyStatusGuard', () => {
  let guard: SurveyStatusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SurveyStatusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
