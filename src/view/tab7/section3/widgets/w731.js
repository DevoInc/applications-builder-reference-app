import gauge from '@devoinc/applications-builder/widgets/gauge';
import dataConversor from '@devoinc/applications-data-library/utils/dataConversor';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw731() {
  let widget = gauge('w731');
  widget.setRequests([requests.get('mapTime')]);

  widget.setValue('count');

  var button = new Button({
    id: '#w732-button',
    onClick: () => widget.refresh(),
  });

  var setLastIndex = new CheckBoxField({
    id: '#w732-setLastIndex',
    onChange: (val) => widget.setLastIndex(val ? 10 : 0),
  });

  var setAutoScale = new CheckBoxField({
    id: '#w732-setAutoScale',
    default: true,
    onChange: (val) => widget.setAutoScale(val),
  });

  var setReverseScale = new CheckBoxField({
    id: '#w732-setReverseScale',
    onChange: (val) => widget.setReverseScale(val),
  });

  var setMinScaleVal = new CheckBoxField({
    id: '#w732-setMinScaleVal',
    onChange: (val) => widget.setMinScaleVal(val ? 9 : 0),
  });

  var setMaxScaleVal = new CheckBoxField({
    id: '#w732-setMaxScaleVal',
    onChange: (val) => widget.setMaxScaleVal(val ? 12 : 0),
  });

  var setPrecission = new CheckBoxField({
    id: '#w732-setPrecission',
    onChange: (val) => widget.setPrecission(val ? 3 : 2),
  });

  var setUnits = new InputField({
    id: '#w732-setUnits',
    onChange: (val) => widget.setUnits(val),
  });

  var setLabelColor = new CheckBoxField({
    id: '#w732-setLabelColor',
    default: true,
    onChange: (val) => widget.setLabelColor(val ? '#765463' : '#FFFFFF'),
  });

  var setWhere = new CheckBoxField({
    id: '#w732-setWhere',
    default: true,
    onChange: (val) => widget.setWhere(val),
  });

  var setMultiplier = new CheckBoxField({
    id: '#w732-setMultiplier',
    onChange: (val) => widget.setMultiplier(val ? 3 : 1),
  });

  var setNumberFormat = new CheckBoxField({
    id: '#w732-setNumberFormat',
    onChange: (val) => widget.setNumberFormat(val ? 'scientific' : ''),
  });

  return widget;
}
