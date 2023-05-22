import { Component, EventEmitter, Output, inject } from '@angular/core';
import { language } from 'src/app/interfaces/language.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent {

  @Output() languageSelected: EventEmitter<string> = new EventEmitter();

  private languageService = inject(LanguageService);
  public languages: language[];
  public language: string;

  constructor(){
    this.languageService.getLanguage().subscribe(
      language => {
        this.languages = language
      }
    );
  }
}
