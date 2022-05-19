import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw124() {
  let widget = empty('w124');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <input type="text" id="w124-input" placeholder="Type something...">
        </fieldset>
        <div id="w124-result"></div>
      </div>`);

    var input = new InputField({
      id: '#w124-input',
      onChange: (val) => {
        $('#w124-result').html(`text=${val}`);
      },
    });
  };

  return widget;
}
