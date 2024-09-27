import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

export default class DetailEditorController extends Controller {
  @tracked showMessage = false;
  @tracked isChange;
  initValue;
  messageText = '';

  setupController(controller, model) {
    this.super(...arguments);
    this.initValue = '';
    super.setupController(controller, model);
    this.initValue = model.description;
  }

  get notChanged() {
    return !this.isChange;
  }

  @service catalog;

  @action
  updateDescription(event) {
    this.model.description = event.target.value;
    this.checkedChange();
  }

  @action
  async saveDescription() {
    this.catalog
      .update('band', this.model, { description: this.model.description })
      .then(() => {
        this.showMessage = true;
        this.messageText = 'Successfully saved';
        this.initValue = this.model.description;
        this.checkedChange();
        later(
          this,
          () => {
            this.showMessage = false;
          },
          1000,
        );
      })
      .catch((error) => {
        alert('Something went wrong: ' + error.message);
      });
  }

  checkedChange() {
    this.isChange = this.model.description !== this.initValue;
  }
}
