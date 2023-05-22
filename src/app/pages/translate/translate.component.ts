import { Component, inject } from '@angular/core';
import { translateForm } from 'src/app/interfaces/translate-form.interface';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {


  public translateData: translateForm = {
    languageOrigen: 'Español',
    languageDestino: 'Inglés',
    text: '',
    translateText: ''
  };

  private translateService = inject(TranslateService);

  translateTexto(){
    this.translateData.translateText = 'Traducciendo...'
    this.translateService.translateText(this.translateData).subscribe(
      textTranslate =>{
        console.log(textTranslate);
        this.translateData.translateText = textTranslate
      }
    );
  }
}
