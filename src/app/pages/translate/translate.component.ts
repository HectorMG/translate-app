import { Component } from '@angular/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {

  public languageOrigen: string;

  mostrar($event:string){
    console.log($event);
  }

}
