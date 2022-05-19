import googleColorMap from '@devoinc/applications-builder/widgets/googleColorMap';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw331() {
  let widget = googleColorMap('w331');
  widget.setRequests([requests.get('mapColor')]);
  widget.setKeys('country');
  widget.setValue('count');

  widget.setTitle('mapa bonito');
  widget.setUnits('units');
  widget.setVariable('Variable');
  widget.setDiscardMethod('none');
  widget.setDataOperation('linear');
  widget.setScaleMinColor('#d37651');
  widget.setScaleMaxColor('#9881d3');
  widget.setStdDevMinColor('#a83c21');
  widget.setStdDevMaxColor('#987612');
  widget.setDisplaySelectors(false);

  var button = new Button({
    id: '#w332-button',
    onClick: () => widget.refresh(),
  });

  var setTitle = new InputField({
    id: '#w332-setTitle',
    onChange: (val) => widget.setTitle(val),
  });

  var setUnits = new InputField({
    id: '#w332-setUnits',
    default: 'units',
    onChange: (val) => widget.setUnits(val),
  });

  var setVariable = new InputField({
    id: '#w332-setVariable',
    default: 'Variable',
    onChange: (val) => widget.setVariable(val),
  });

  var setDiscardMethod = new SelectField({
    id: '#w332-setDiscardMethod',
    default: 'none',
    onChange: (val) => widget.setDiscardMethod(val),
  });

  var setDataOperation = new SelectField({
    id: '#w332-setDataOperation',
    default: 'linear',
    onChange: (val) => widget.setDataOperation(val),
  });

  var setScaleMinColor = new SelectField({
    id: '#w332-setScaleMinColor',
    default: '#d37651',
    onChange: (val) => widget.setScaleMinColor(val),
  });

  var setScaleMaxColor = new SelectField({
    id: '#w332-setScaleMaxColor',
    default: '#9881d3',
    onChange: (val) => widget.setScaleMaxColor(val),
  });

  var setStdDevMinColor = new SelectField({
    id: '#w332-setStdDevMinColor',
    default: '#a83c21',
    onChange: (val) => widget.setStdDevMinColor(val),
  });

  var setStdDevMaxColor = new SelectField({
    id: '#w332-setStdDevMaxColor',
    default: '#987612',
    onChange: (val) => widget.setStdDevMaxColor(val),
  });

  var setDisplaySelectors = new CheckBoxField({
    id: '#w332-setDisplaySelectors',
    onChange: (val) => widget.setDisplaySelectors(val),
  });

  return widget;
}
