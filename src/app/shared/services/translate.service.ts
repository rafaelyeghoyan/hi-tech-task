import {Injectable} from '@angular/core';
import {translate} from "../../../assets/translate/translate";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
 public language: any = translate;
 public translations: any = this.language["en"];

  constructor() {
  }

  changeLang(lang: string) {
    this.translations = this.language[lang];
  }
}
