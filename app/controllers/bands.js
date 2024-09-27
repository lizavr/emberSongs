import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BandsController extends Controller {
  @service catalog;
  @service router;
  @tracked bandId;

  @action
  async deleteBand(bandId) {
    this.bandId = bandId;
    await this.catalog.delete('band', bandId);
    this.router.transitionTo('bands');
  }
}
