import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageListComponent } from './language-list/language-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LanguageListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LanguageListComponent
  ]
})
export class ComponentsModule { }
