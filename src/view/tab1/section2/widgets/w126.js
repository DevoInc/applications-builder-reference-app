import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import { __ } from '@devoinc/applications-builder/i18n';
import Select2Field from '@devoinc/applications-builder/fields/Select2Field';

export default function buildw126() {
  let widget = empty('w126');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <select id="w126-select">
            <option value="a" selected>${__('Choice A')}</option>
            <option value="b">${__('Choice B')}</option>
            <option value="c">${__('Choice C')}</option>
          </select>
        </fieldset>
        <div id="w126-result"></div>
      </div>`);

    const select2 = new Select2Field({
      id: '#w126-select',
      data: [
        { id: 'a', text: 'Choice A' },
        { id: 'b', text: 'Choice B' },
        { id: 'c', text: 'Choice C' },
      ],
      placeholder: 'Choose something...',
      onChange: (val) => {
        $('#w126-result').html(`selected=${val}`);
      },
    });
  };

  return widget;
}
