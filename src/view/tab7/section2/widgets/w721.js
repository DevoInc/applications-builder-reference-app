import funnel from '@devoinc/applications-builder/widgets/funnel';
import dataConversor from '@devoinc/applications-data-library/utils/dataConversor';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw721() {
  let widget = funnel('w721');
  widget.setRequests([requests.get('funnel')]);

  widget.setValue('count');
  widget.setKeys(['ip']);

  var button = new Button({
    id: '#w722-button',
    onClick: () => widget.refresh(),
  });

  var setIsFieldRelated = new CheckBoxField({
    id: '#w722-setIsFieldRelated',
    onChange: (val) => widget.setIsFieldRelated(val),
  });

  var seUnits = new InputField({
    id: '#w722-seUnits',
    onChange: (val) => widget.seUnits(val),
  });

  return widget;
}
