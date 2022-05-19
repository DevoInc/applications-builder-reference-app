import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';

export default function buildw122() {
  let widget = empty('w122');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <div>
            <input type="checkbox" id="w122-checkbox">
            <label>Check me!</label>
          </div>
          <div id="ww122-result"></div>
        </fieldset>
      </div>`);

    var checkbox = new CheckBoxField({
      id: '#w122-checkbox',
      onChange: (val) => {
        $('#ww122-result').html(`checked=${val}`);
      },
    });
  };

  return widget;
}
