import timeHeatmap from '@devoinc/applications-builder/widgets/timeHeatmap';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw1011() {
  let widget = timeHeatmap('w1011');
  widget.setRequests([requests.get('mapTime')]);

  widget.setValue('count');
  widget.setPeriod(60 * 60 * 1000);
  widget.setCallFrom('DB');

  var button = new Button({
    id: '#w1012-button',
    onClick: () => widget.refresh(),
  });

  var setDisplaySelectors = new CheckBoxField({
    id: '#w1012-setDisplaySelectors',
    default: true,
    onChange: (val) => widget.setDisplaySelectors(val),
  });

  var setShowLastEvent = new CheckBoxField({
    id: '#w1012-setShowLastEvent',
    default: true,
    onChange: (val) => widget.setShowLastEvent(val),
  });

  var setShowFirstEvent = new CheckBoxField({
    id: '#w1012-setShowFirstEvent',
    default: true,
    onChange: (val) => widget.setShowFirstEvent(val),
  });

  var setHeadBackgroundColor = new CheckBoxField({
    id: '#w1012-setHeadBackgroundColor',
    onChange: (val) => widget.setHeadBackgroundColor(val ? 'red' : ''),
  });

  var setFontColor = new CheckBoxField({
    id: '#w1012-setFontColor',
    onChange: (val) => widget.setFontColor(val ? 'blue' : ''),
  });

  return widget;
}
