import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service language;

  @action
  toggleLanguage() {
    const newLang =
      this.language.currentLanguage === 'en-us' ? 'ru-ru' : 'en-us';
    this.language.changeLanguage(newLang);
  }
}
