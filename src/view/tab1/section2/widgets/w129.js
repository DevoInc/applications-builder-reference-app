import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import DateTimePickerRangeField from '@devoinc/applications-builder/fields/DateTimePickerRangeField';

export default function buildw129() {
  let widget = empty('w129');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <div id="w129-datepicker"></div>
          <div id="w129-datepicker2">set</div>
        </fieldset>
        <div id="w129-result"></div>
      </div>`);

    const datepicker = new DateTimePickerRangeField({
      id: '#w129-datepicker',
      timepicker: true,
      onChange: (val) => {
        $('#w129-result').html(`
          from=${datepicker.dtPickers.from.getDTPFormat(true)},
          to=${datepicker.dtPickers.to.getDTPFormat(true)}
        `);
      },
    });

    $('#w129-datepicker2').on('click', () => {
      datepicker.setValue({
        from: '2019/01/01 01:34',
        to: '2019/02/01 11:34',
      });
    });
  };

  return widget;
}
