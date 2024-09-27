import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';

module('Integration | Component | band-list', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us', {
    removeBtn: 'Remove',
  });
  hooks.beforeEach(function () {
    let routerService = this.owner.lookup('service:router');
    routerService.isActive = (routeName, band) => band.id === '2';
  });

  test('it renders all bands passed to it and correctly applies classes based on isActive', async function (assert) {
    this.set('bands', [
      { id: '1', name: 'First', isActive: false },
      { id: '2', name: 'Second', isActive: true },
      { id: '3', name: 'Third', isActive: false },
    ]);
    // eslint-disable-next-line no-unused-vars
    this.set('deleteBand', (_) => {});

    await render(
      hbs`<BandList @bands={{this.bands}}  @deleteBandFunc={{this.deleteBand}}/>`,
    );

    assert
      .dom('[data-test-rr="band-list-item"]')
      .exists({ count: 3 }, 'Three elements are rendered');
    assert
      .dom('[data-test-rr="band-link"]:not(.border-purple-400)')
      .exists(
        { count: 2 },
        'Inactive items do not have the border-purple-400 class',
      );
    assert
      .dom('[data-test-rr="band-link"].border-purple-400')
      .exists({ count: 1 }, 'Active item has the border-purple-400 class');
    assert
      .dom('[data-test-rr="band-link"]')
      .hasTextContaining('First', 'Text is rendered correctly');
  });
});
