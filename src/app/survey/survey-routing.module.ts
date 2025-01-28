import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyPageComponent, SurveyQuestionsPageComponent } from './pages';
import { QuestionsResolver } from './resolvers';
import { SurveyStatusGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start',
  },
  {
    path: 'start',
    canActivate: [SurveyStatusGuard],
    component: SurveyPageComponent,
  },
  {
    path: 'questions',
    canActivate: [SurveyStatusGuard],
    resolve: [QuestionsResolver],
    component: SurveyQuestionsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyRoutingModule {}
