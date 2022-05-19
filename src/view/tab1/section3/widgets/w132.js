import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import { info } from '@devoinc/applications-builder/libs/alerts';
import Button from '@devoinc/applications-builder/fields/Button';

export default function buildw132() {
  let widget = empty('w132');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <button type="button" id="w132-button">Click me!</button>
          <div id="w132-result"></div>
        </fieldset>
      </div>
      `);

    var button = new Button({
      id: '#w132-button',
      onClick: () => {
        info({
          title: 'information!',
          msg: 'nothing happening!',
          timer: 999999999,
        });
      },
    });
  };

  return widget;
}
