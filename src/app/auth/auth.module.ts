import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule],
  exports: [],
  providers: [],
})
export class AuthModule {}
