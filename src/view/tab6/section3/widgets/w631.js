import bubbles from '@devoinc/applications-builder/widgets/bubbles';
import dataConversor from '@devoinc/applications-data-library/utils/dataConversor';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw631() {
  let widget = bubbles('w631');
  widget.setRequests([requests.get('mapTime')]);

  widget.setValue('count');
  widget.setXaxis({ name: 'lat', type: 'float' });
  widget.setYaxis({ name: 'lon', type: 'float' });

  var button = new Button({
    id: '#w632-button',
    onClick: () => widget.refresh(),
  });

  var setYaxisTitle = new InputField({
    id: '#w632-setYaxisTitle',
    default: 'lon',
    onChange: (val) => widget.setYaxisTitle(val),
  });

  var setXaxisTitle = new InputField({
    id: '#w632-setXaxisTitle',
    default: 'lat',
    onChange: (val) => widget.setXaxisTitle(val),
  });

  var setSeriesBy = new CheckBoxField({
    id: '#w632-setSeriesBy',
    onChange: (val) => widget.setSeriesBy(val ? 'clientIpAddress' : null),
  });

  var setSize_title = new InputField({
    id: '#w632-setSize_title',
    default: 'count',
    onChange: (val) => widget.setSize_title(val),
  });

  var setLegend = new CheckBoxField({
    id: '#w632-setLegend',
    default: true,
    onChange: (val) => widget.setLegend(val),
  });

  var setDefaultformaterlegend = new CheckBoxField({
    id: '#w632-setDefaultformaterlegend',
    onChange: (val) =>
      widget.setDefaultformaterlegend((ctx, ctxModule) => {
        return (
          '<span style="color:' +
          (val ? 'red' : ctx.color) +
          '">' +
          (val ? ctx.name.toUpperCase() : ctx.name) +
          '</span>'
        );
      }),
  });

  return widget;
}
