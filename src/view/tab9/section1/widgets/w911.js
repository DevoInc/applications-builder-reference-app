import punchCard from '@devoinc/applications-builder/widgets/punchCard';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw911() {
  let widget = punchCard('w911');
  widget.setRequests([requests.get('mapTime')]);

  widget.setKeys('clientIpAddress');
  widget.setValue('count');

  var button = new Button({
    id: '#w912-button',
    onClick: () => widget.refresh(),
  });

  var setLegendLength = new CheckBoxField({
    id: '#w912-setLegendLength',
    onChange: (val) => widget.setLegendLength(val ? 15 : null),
  });

  return widget;
}
