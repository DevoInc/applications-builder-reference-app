import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import { __ } from '@devoinc/applications-builder/i18n';

export default function buildw125() {
  let widget = empty('w125');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <select id="w125-select">
            <option value="a" selected>${__('Choice A')}</option>
            <option value="b">${__('Choice B')}</option>
            <option value="c">${__('Choice C')}</option>
          </select>
        </fieldset>
        <div id="w125-result"></div>
      </div>`);

    var select = new SelectField({
      id: '#w125-select',
      default: 'a',
      onChange: (val) => {
        $('#w125-result').html(`selected=${val}`);
      },
    });
  };

  return widget;
}
