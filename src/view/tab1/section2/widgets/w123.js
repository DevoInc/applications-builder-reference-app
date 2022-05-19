import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';
import ChoicePickerField from '@devoinc/applications-builder/fields/ChoicePickerField';

export default function buildw123() {
  let widget = empty('w123');
  widget.setRequests([requests.get('commonRequest')]);
  widget.render = () => {
    //$(`#${widget.data.id} .lt-vapp-widget-graphic`).html(view);

    const choicepicker = new ChoicePickerField({
      id: '#w123-choicepicker',
      choices: [
        { id: 'a', text: 'Choice A', value: 'A' },
        { id: 'b', text: 'Choice B', value: 'B' },
        { id: 'c', text: 'Choice C', value: 'C' },
      ],
      default: 'a',
      onChange: (val) => {
        $('#w123-result').html(`selected=${val.id}`);
      },
    });

    $(`#${widget.data.id} #w123-choicepicker`).append(`
      <div id="w123-result"></div>
    `);
  };

  return widget;
}
