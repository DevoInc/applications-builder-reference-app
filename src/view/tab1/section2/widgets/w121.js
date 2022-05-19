import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import Button from '@devoinc/applications-builder/fields/Button';

export default function buildw121() {
  let widget = empty('w121');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <button type="button" id="w121-button">Click me!</button>
          <div id="ww121-result"></div>
        </fieldset>
      </div>
      `);

    var button = new Button({
      id: '#w121-button',
      onClick: () => {
        $('#ww121-result').html('Yay!!');
        setTimeout(() => {
          $('#ww121-result').html('');
        }, 3000);
      },
    });
  };

  return widget;
}
