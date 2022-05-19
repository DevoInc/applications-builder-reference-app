import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import DateTimePickerField from '@devoinc/applications-builder/fields/DateTimePickerField';

export default function buildw127() {
  let widget = empty('w127');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <div id="w127-datepicker"></div>
          <div id="w127-datepicker2">set</div>
        </fieldset>
        <div id="w127-result"></div>
      </div>`);

    const datepicker = new DateTimePickerField({
      id: '#w127-datepicker',
      onChange: (val) => {
        $('#w127-result').html(`date=${datepicker.getDTPFormat(false)}`);
      },
    });

    $('#w127-datepicker2').on('click', () => {
      datepicker.setValue('2019/01/01');
    });
  };

  return widget;
}
