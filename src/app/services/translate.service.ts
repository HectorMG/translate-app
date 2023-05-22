import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { translateForm } from '../interfaces/translate-form.interface';

const url_ai = environment.url_ai;

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private http = inject(HttpClient);
  public settings = {
    "model": "gpt-3.5-turbo",
    "messages": [
        {
          "role": "system",
          "content": "Vas a ser un tradutor de texto y solo me indicaras la respuesta traduccida, en la frase que te envien estara el lenguaje de origen y el destino, la estructura de la frase es texto a traducir -- origen -- destino, si el origen dice auto es para que idenfiques el lenguaje de origen, Tu solo mostraras la información traduccida sin indicar ningun otro dato, es decir sin mostrar información del lenguaje traducido"
        }
    ],
    "temperature": 0.7
  }

  constructor() { }

  translateText(dataTranslate: translateForm){

    const data = {
      'role': 'user',
      'content': `${dataTranslate.text} -- ${dataTranslate.languageOrigen} -- ${dataTranslate.languageDestino}`
    }

    this.settings.messages.push(data)

    return this.http.post(`${url_ai}/chat/completions`, this.settings, {
      headers:{
        'Authorization': `Bearer ${environment.token}`
      }
    }).pipe(
      map(
        (resp:any) => {
          return resp.choices[0].message.content
        }
      )
    )
  }
}
