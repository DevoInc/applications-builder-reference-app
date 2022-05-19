import flameGraph from '@devoinc/applications-builder/widgets/flameGraph';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw711() {
  let widget = flameGraph('w711');
  widget.setRequests([requests.get('mapTime')]);

  widget.setPathKey('clientIpAddress');
  widget.setWeightKey('count');

  var button = new Button({
    id: '#w712-button',
    onClick: () => widget.refresh(),
  });
  /*
  var setMargin = new CheckBoxField({
    id: '#w612-setMargin',
    onChange: val => widget.setMargin(val ? { 'right': 100, 'left': 100 } : {})
  });

  var setDataHeight = new CheckBoxField({
    id: '#w612-setDataHeight',
    onChange: val => widget.setDataHeight(val ? 100 : 0)
  });

  var setLineSpacing = new CheckBoxField({
    id: '#w612-setLineSpacing',
    onChange: val => widget.setLineSpacing(val ? 100 : 0)
  });

  var setPaddingTopHeading = new CheckBoxField({
    id: '#w612-setPaddingTopHeading',
    onChange: val => widget.setPaddingTopHeading(val ? -20 : 0)
  });

  var setPaddingBottom = new CheckBoxField({
    id: '#w612-setPaddingBottom',
    onChange: val => widget.setPaddingBottom(val ? -20 : 0)
  });

  var setPaddingLeft = new CheckBoxField({
    id: '#w612-setPaddingLeft',
    onChange: val => widget.setPaddingLeft(val ? -20 : 0)
  });

  var setToolTipClass = new CheckBoxField({
    id: '#w612-setToolTipClass',
    onChange: val => widget.setToolTipClass(val ? 'tultip' : '')
  });

  var setDateFormatter = new CheckBoxField({
    id: '#w612-setDateFormatter',
    onChange: val => widget.setDateFormatter(val ? 'YYYY-MM-DD HH:mm:SS' : '')
  });

  var setVertGridClass = new CheckBoxField({
    id: '#w612-setVertGridClass',
    onChange: val => widget.setVertGridClass(val ? 'clasevertical' : '')
  });

  var setHorzGridClass = new CheckBoxField({
    id: '#w612-setHorzGridClass',
    onChange: val => widget.setHorzGridClass(val ? 'clasehorizontal' : '')
  });

  var setGTitleClass = new CheckBoxField({
    id: '#w612-setGTitleClass',
    onChange: val => widget.setGTitleClass(val ? 'clasetitular' : '')
  });

  var setGAxisClass = new CheckBoxField({
    id: '#w612-setGAxisClass',
    onChange: val => widget.setGAxisClass(val ? 'clasege' : '')
  });

  var setAxisClass = new CheckBoxField({
    id: '#w612-setAxisClass',
    onChange: val => widget.setAxisClass(val ? 'claseeje' : '')
  });

  var setGDataClass = new CheckBoxField({
    id: '#w612-setGDataClass',
    onChange: val => widget.setGDataClass(val ? 'clasedata' : '')
  });

  var setDatasetClass = new CheckBoxField({
    id: '#w612-setDatasetClass',
    onChange: val => widget.setDatasetClass(val ? 'clasedataset' : '')
  });

  var setYTitleClass = new CheckBoxField({
    id: '#w612-setYTitleClass',
    onChange: val => widget.setYTitleClass(val ? 'claseyetitular' : '')
  });

  var setHasDataClass = new CheckBoxField({
    id: '#w612-setHasDataClass',
    onChange: val => widget.setHasDataClass(val ? 'clasehaydatos' : '')
  });

  var setHasNoDataClass = new CheckBoxField({
    id: '#w612-setHasNoDataClass',
    onChange: val => widget.setHasNoDataClass(val ? 'clasenohaydatos' : '')
  });

  var setHasNoDataClass = new CheckBoxField({
    id: '#w612-setHasNoDataClass',
    onChange: val => widget.setHasNoDataClass(val ? 'clasenohaydatos' : '')
  });

  var setTransitionDuration = new CheckBoxField({
    id: '#w612-setTransitionDuration',
    onChange: val => widget.setTransitionDuration(val ? 1000 : 0)
  });

  var setTransitionOpacity = new CheckBoxField({
    id: '#w612-setTransitionOpacity',
    onChange: val => widget.setTransitionOpacity(val ? 0.5 : 0)
  });

  var setDataThreshold = new CheckBoxField({
    id: '#w612-setDataThreshold',
    onChange: val => widget.setDataThreshold(val ? 5 : 0)
  });

  var setTooltipHasDataClass = new CheckBoxField({
    id: '#w612-setTooltipHasDataClass',
    onChange: val => widget.setTooltipHasDataClass(val ? 'tultiphaydatos' : '')
  });

  var setTooltipHasNoDataClass = new CheckBoxField({
    id: '#w612-setTooltipHasNoDataClass',
    onChange: val => widget.setTooltipHasNoDataClass(val ? 'tultipnohaydatos' : '')
  });

  var setIconOk = new CheckBoxField({
    id: '#w612-setIconOk',
    onChange: val => widget.setIconOk(val ? 'iconok' : '')
  });

  var setIconCancel = new CheckBoxField({
    id: '#w612-setIconCancel',
    onChange: val => widget.setIconCancel(val ? 'iconcancelar' : '')
  });

  var setMouseoutDuration = new CheckBoxField({
    id: '#w612-setMouseoutDuration',
    onChange: val => widget.setMouseoutDuration(val ? 2000 : 0)
  });

  var setTimelineTitle = new CheckBoxField({
    id: '#w612-setTimelineTitle',
    onChange: val => widget.setTimelineTitle(val ? 'titulillo' : '')
  });

  var setTitleClass = new CheckBoxField({
    id: '#w612-setTitleClass',
    onChange: val => widget.setTitleClass(val ? 'clasetitulo' : '')
  });

  var setSubtitleDateFormat = new CheckBoxField({
    id: '#w612-setSubtitleDateFormat',
    onChange: val => widget.setSubtitleDateFormat(val ? 'YYYY-MM-DD HH:mm:SS' : '')
  });

  var setSubheadingClass = new CheckBoxField({
    id: '#w612-setSubheadingClass',
    onChange: val => widget.setSubheadingClass(val ? 'clasesubcabeza' : '')
  });

  var setGLegendClass = new CheckBoxField({
    id: '#w612-setGLegendClass',
    onChange: val => widget.setGLegendClass(val ? 'claselegenda' : '')
  });

  var setLegendTop = new CheckBoxField({
    id: '#w612-setLegendTop',
    onChange: val => widget.setLegendTop(val ? 15 : 0)
  });

  var setSubtitleTop = new CheckBoxField({
    id: '#w612-setSubtitleTop',
    onChange: val => widget.setSubtitleTop(val ? 15 : 0)
  });

  var setLegendMarginLeft = new CheckBoxField({
    id: '#w612-setLegendMarginLeft',
    onChange: val => widget.setLegendMarginLeft(val ? 15 : 0)
  });

  var setLegendMarginTop = new CheckBoxField({
    id: '#w612-setLegendMarginTop',
    onChange: val => widget.setLegendMarginTop(val ? 15 : 0)
  });

  var setLegendMarginH1 = new CheckBoxField({
    id: '#w612-setLegendMarginH1',
    onChange: val => widget.setLegendMarginH1(val ? 15 : 0)
  });

  var setLegendMarginH2 = new CheckBoxField({
    id: '#w612-setLegendMarginH2',
    onChange: val => widget.setLegendMarginH2(val ? 15 : 0)
  });

  var setLegendHeight = new CheckBoxField({
    id: '#w612-setLegendHeight',
    onChange: val => widget.setLegendHeight(val ? 15 : 0)
  });

  var setLegendWidth = new CheckBoxField({
    id: '#w612-setLegendWidth',
    onChange: val => widget.setLegendWidth(val ? 15 : 0)
  });

  var setTextHasData = new CheckBoxField({
    id: '#w612-setTextHasData',
    onChange: val => widget.setTextHasData(val ? 'Tie\' tierras' : '')
  });

  var setTextHasNotData = new CheckBoxField({
    id: '#w612-setTextHasNotData',
    onChange: val => widget.setTextHasNotData(val ? 'No tie\' tierras' : '')
  });

  var setLegendClass = new CheckBoxField({
    id: '#w612-setLegendClass',
    onChange: val => widget.setLegendClass(val ? 'claseleyenda' : '')
  });

  var setLegendUnits = new CheckBoxField({
    id: '#w612-setLegendUnits',
    onChange: val => widget.setLegendUnits(val ? 'unidades' : '')
  });

  var setDataFormatter = new CheckBoxField({
    id: '#w612-setDataFormatter',
    onChange: val => widget.setDataFormatter(val ? (a, b, c) => {
      let result = '';
      for (let i = 0; i < a; i++) result += '|';
      return result;
    } : null)
  });
  */
  return widget;
}
