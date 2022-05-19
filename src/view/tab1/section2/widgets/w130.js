import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import dateRange from '@devoinc/applications-builder/utils/dateRange';
import DateTimePickerRangeFieldPresets from '@devoinc/applications-builder/fields/DateTimePickerRangeFieldPresets';

export default function buildw130() {
  let widget = empty('w130');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    $(`#${widget.data.id} .lt-vapp-widget-graphic`).html(`
      <div class="lt-form-column">
        <fieldset class="lt-form-group">
          <div id="w130-datepicker"></div>
          <div id="w130-datepicker2">set</div>
        </fieldset>
        <div id="w130-result"></div>
      </div>`);

    const datepicker = new DateTimePickerRangeFieldPresets({
      id: '#w130-datepicker',
      choices: [
        {
          id: '1h',
          value: () => dateRange.fromNow(1, 'hour', 'minute'),
          text: '1h',
        },
        {
          id: '4h',
          value: () => dateRange.fromNow(4, 'hour', 'minute'),
          text: '4h',
        },
        {
          id: '8h',
          value: () => dateRange.fromNow(8, 'hour', 'minute'),
          text: '8h',
        },
        {
          id: '1d',
          value: () => dateRange.fromNow(1, 'day', 'minute'),
          text: '1d',
        },
        {
          id: '7d',
          value: () => dateRange.fromNow(7, 'day', true),
          text: '7d',
        },
        {
          id: 'custom',
          value: () => ({
            from: new Date('2019/01/01 01:34').getTime(),
            to: new Date('2019/02/01 11:34').getTime(),
          }),
          text: 'Custom',
        },
      ],
      default: '4h',
      timepicker: true,
      onChange: (val) => {
        $('#w130-result').html(`
          choice=${
            datepicker.choicePickerField.value
              ? datepicker.choicePickerField.value.id
              : null
          },
          from=2019/01/01 01:34,
          to=2019/02/01 11:34
        `);
      },
    });

    $('#w130-datepicker2').on('click', () => {
      datepicker.dateTimePickerRangeField.setValue({
        from: '2019/01/01 01:34',
        to: '2019/02/01 11:34',
      });
    });
  };

  return widget;
}
