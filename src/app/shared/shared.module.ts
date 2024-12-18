import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppFooterComponent, AppNavbarComponent } from './components';

@NgModule({
  declarations: [AppFooterComponent, AppNavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppFooterComponent, AppNavbarComponent],
  providers: [],
})
export class SharedModule {}
