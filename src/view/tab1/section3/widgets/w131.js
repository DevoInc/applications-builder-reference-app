import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import { error } from '@devoinc/applications-builder/libs/alerts';
import Button from '@devoinc/applications-builder/fields/Button';

export default function buildw131() {
  let widget = empty('w131');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <button type="button" id="w131-button">Click me!</button>
          <div id="w131-result"></div>
        </fieldset>
      </div>
      `);

    var button = new Button({
      id: '#w131-button',
      onClick: () => {
        error({ title: 'error!', msg: 'save yourselves!', timer: 999999999 });
      },
    });
  };

  return widget;
}
