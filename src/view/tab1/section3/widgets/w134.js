import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import { warning } from '@devoinc/applications-builder/libs/alerts';
import Button from '@devoinc/applications-builder/fields/Button';

export default function buildw134() {
  let widget = empty('w134');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <button type="button" id="w134-button">Click me!</button>
          <div id="w134-result"></div>
        </fieldset>
      </div>
      `);

    var button = new Button({
      id: '#w134-button',
      onClick: () => {
        warning({
          title: 'warning!',
          msg: 'something may or may not be happening! thanks, Sarah!',
          timer: 999999999,
        });
      },
    });
  };

  return widget;
}
