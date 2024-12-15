import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SurveyPageComponent, SurveyQuestionsPageComponent } from './pages';
import { SurveyRoutingModule } from './survey-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { SurveyItemComponent } from './components/survey-item/survey-item.component';

@NgModule({
  declarations: [SurveyPageComponent, SurveyQuestionsPageComponent, SurveyListComponent, SurveyItemComponent],
  imports: [CommonModule, SurveyRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class SurveyModule {}
