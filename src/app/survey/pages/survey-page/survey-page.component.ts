import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../api';

@Component({
  selector: 'survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css'],
})
export class SurveyPageComponent implements OnInit {
  constructor(private readonly _surveyService: SurveyService) {}

  ngOnInit(): void {
    this._surveyService.checkSurvey();
  }
}
