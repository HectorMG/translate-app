import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { language } from '../interfaces/language.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private language = '../../assets/data/language.json'

  constructor(private http: HttpClient) {}

  getLanguage(){
    return this.http.get<language[]>(this.language);
  }

}
