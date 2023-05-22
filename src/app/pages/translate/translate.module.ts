import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateComponent } from './translate.component';



@NgModule({
  declarations: [
    TranslateComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class TranslateModule { }
