import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class LanguageService extends Service {
  @service intl;
  @tracked currentLanguage = 'en-us';
  get isEn() {
    return this.currentLanguage === 'en-us';
  }

  changeLanguage(newLang) {
    this.currentLanguage = newLang;
    this.intl.setLocale([newLang]);
  }
}
