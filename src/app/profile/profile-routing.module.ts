import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomGuard } from './guards';
import { CurrentRoomPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'current-room',
  },
  // has room
  {
    path: 'current-room',
    component: CurrentRoomPageComponent,
    canActivate: [RoomGuard],
  },
  // has no room yet
  {
    path: 'survey',
    loadChildren: () =>
      import('../survey/survey.module').then((m) => m.SurveyModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
