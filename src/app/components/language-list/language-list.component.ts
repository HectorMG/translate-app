import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { language } from 'src/app/interfaces/language.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent {

  @Output() languageSelected: EventEmitter<string> = new EventEmitter();
  @Input() language: string;

  private languageService = inject(LanguageService);
  public languages: language[];

  constructor(){
    this.languageService.getLanguage().subscribe(
      language => {
        this.languages = language
      }
    );
  }
}
