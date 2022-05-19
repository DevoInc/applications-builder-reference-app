import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import { success } from '@devoinc/applications-builder/libs/alerts';
import Button from '@devoinc/applications-builder/fields/Button';

export default function buildw133() {
  let widget = empty('w133');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <button type="button" id="w133-button">Click me!</button>
          <div id="w133-result"></div>
        </fieldset>
      </div>
      `);

    var button = new Button({
      id: '#w133-button',
      onClick: () => {
        success({
          title: 'success!',
          msg: 'no errors! impossible!',
          timer: 999999999,
        });
      },
    });
  };

  return widget;
}
