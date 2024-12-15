import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SurveyPageComponent } from './pages';
import { SurveyRoutingModule } from './survey-routing.module';

@NgModule({
  declarations: [SurveyPageComponent],
  imports: [CommonModule, SurveyRoutingModule],
  exports: [],
  providers: [],
})
export class SurveyModule {}
