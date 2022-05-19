import rag from '@devoinc/applications-builder/widgets/rag';
import dataConversor from '@devoinc/applications-data-library/utils/dataConversor';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw921() {
  let widget = rag('w921');
  widget.setRequests([requests.get('funnel')]);

  widget.setKeys(['ip']);
  widget.setValue('count');

  var button = new Button({
    id: '#w922-button',
    onClick: () => widget.refresh(),
  });

  var setIsFieldsRelated = new CheckBoxField({
    id: '#w922-setIsFieldsRelated',
    default: true,
    onChange: (val) => widget.setIsFieldsRelated(val),
  });

  var setUnit = new InputField({
    id: '#w922-setUnit',
    onChange: (val) => widget.setUnit(val),
  });

  return widget;
}
