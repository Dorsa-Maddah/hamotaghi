import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CurrentRoomPageComponent } from './pages';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [CurrentRoomPageComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class ProfileModule {}
