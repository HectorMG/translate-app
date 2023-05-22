import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateComponent } from './translate.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TranslateComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ]
})
export class TranslateModule { }
