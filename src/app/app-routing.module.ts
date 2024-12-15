import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent, SurveyPageComponent } from './pages';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/logging.module').then((m) => m.LoggingModule),
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'survey',
    component: SurveyPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
