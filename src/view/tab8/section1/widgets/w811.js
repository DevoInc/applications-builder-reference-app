import pie from '@devoinc/applications-builder/widgets/pie';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw811() {
  let widget = pie('w812');
  widget.setRequests([requests.get('mapTime')]);

  widget.setValue('count');
  widget.setKeys(['clientIpAddress']);

  var button = new Button({
    id: '#w812-button',
    onClick: () => widget.refresh(),
  });

  var setLegend = new CheckBoxField({
    id: '#w812-setLegend',
    default: true,
    onChange: (val) => widget.setLegend(val),
  });

  var setDefaultFormater = new CheckBoxField({
    id: '#w812-setDefaultFormater',
    onChange: (val) =>
      widget.setDefaultFormater((ctx, ctxModule) => {
        return (
          '<p style="color:' +
          ctx.point.color +
          ';">' +
          (val ? '##' + ctx.point.name + '##' : ctx.point.name) +
          ': <b style="color:#FFFFF8;">' +
          ctx.percentage.toFixed(val ? 5 : 2) +
          '%</b></p>'
        );
      }),
  });

  var setDefaultFormaterTooltip = new CheckBoxField({
    id: '#w812-setDefaultFormaterTooltip',
    onChange: (val) =>
      widget.setDefaultFormaterTooltip((ctx, ctxModule) => {
        return (
          (val ? '##' + ctx.point.name + '##' : ctx.point.name) +
          '<br/>' +
          '<b>' +
          ctx.y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
          '</b>' +
          ' (' +
          ctx.percentage.toFixed(val ? 5 : 2) +
          ' %)</b>'
        );
      }),
  });

  var setHighchartsProperty = new CheckBoxField({
    id: '#w812-setHighchartsProperty',
    onChange: (val) =>
      widget.setHighchartsProperty('title.text', val ? '=^_^=' : ''),
  });

  return widget;
}
