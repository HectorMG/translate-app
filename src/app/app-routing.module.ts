import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateRoutingModule } from './pages/translate/translate-routing.module';

const routes: Routes = [
  {path: '', redirectTo: '/translate', pathMatch: 'full'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
