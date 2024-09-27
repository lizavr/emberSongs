import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service intl;
  @service language;
  @service catalog;

  beforeModel() {
    this.language.changeLanguage(this.language.currentLanguage);
  }
}
