import monitoring from '@devoinc/applications-builder/widgets/monitoring';
import dataConversor from '@devoinc/applications-data-library/utils/dataConversor';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw831() {
  let widget = monitoring('w831');
  widget.setRequests([requests.get('funnel')]);

  widget.setValue('count');
  widget.setKey('ip');

  var button = new Button({
    id: '#w832-button',
    onClick: () => widget.refresh(),
  });

  var setColors = new CheckBoxField({
    id: '#w832-setColors',
    onChange: (val) =>
      widget.setColors(
        val ? ['#999999', '#555555', '#111111'] : ['green', 'orange', 'red']
      ),
  });

  var setItemsByRow = new CheckBoxField({
    id: '#w832-setItemsByRow',
    onChange: (val) => widget.setItemsByRow(val ? 1 : 4),
  });

  var setIcons = new CheckBoxField({
    id: '#w832-setIcons',
    onChange: (val) =>
      widget.setIcons(
        val
          ? ['icon-minus-sign', 'icon-ok-sign', 'icon-remove-sign']
          : ['icon-ok-sign', 'icon-minus-sign', 'icon-remove-sign']
      ),
  });

  var setHeight = new CheckBoxField({
    id: '#w832-setHeight',
    onChange: (val) => widget.setHeight(val ? 100 : 200),
  });

  var setRules = new CheckBoxField({
    id: '#w832-setRules',
    onChange: (val) =>
      widget.setRules(
        val
          ? [
              { operator: '>=', value: 196.66 },
              { operator: '<', value: 83.33 },
            ]
          : [
              { operator: '>=', value: 66.66 },
              { operator: '<', value: 33.33 },
            ]
      ),
  });

  var setIsPercent = new CheckBoxField({
    id: '#w832-setIsPercent',
    onChange: (val) => widget.setIsPercent(val),
  });

  return widget;
}
