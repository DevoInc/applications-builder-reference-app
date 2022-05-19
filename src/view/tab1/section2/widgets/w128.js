import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import DateTimePickerField from '@devoinc/applications-builder/fields/DateTimePickerField';

export default function buildw128() {
  let widget = empty('w128');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <div id="w128-datepicker"></div>
          <div id="w128-datepicker2">set</div>
        </fieldset>
        <div id="w128-result"></div>
      </div>`);

    const datepicker = new DateTimePickerField({
      id: '#w128-datepicker',
      timepicker: true,
      onChange: (val) => {
        $('#w128-result').html(`date=${datepicker.getDTPFormat(true)}`);
      },
    });

    $('#w128-datepicker2').on('click', () => {
      datepicker.setValue('2019/01/01 01:34');
    });
  };

  return widget;
}
