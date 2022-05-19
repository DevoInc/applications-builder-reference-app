import bichord from '@devoinc/applications-builder/widgets/bichord';
import dataConversor from '@devoinc/applications-data-library/utils/dataConversor';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw621() {
  let widget = bichord('w621');
  widget.setRequests([requests.get('bichord')]);
  widget.setKeys({ source: 'ip', target: 'statusCode' });
  widget.setValue('count');
  widget.setSeparationAngle(0);

  var button = new Button({
    id: '#w622-button',
    onClick: () => widget.refresh(),
  });

  var setMinPct = new InputField({
    id: '#w622-setMinPct',
    default: '0',
    onChange: (val) => widget.setMinPct(Number(val)),
  });

  var setSeparationAngle = new InputField({
    id: '#w622-setSeparationAngle',
    default: '0',
    onChange: (val) => widget.setSeparationAngle(Number(val)),
  });

  var setSourceSideClass = new CheckBoxField({
    id: '#w622-setSourceSideClass',
    onChange: (val) => widget.setSourceSideClass(val ? 'claseladofuente' : ''),
  });

  var setTargetSideClass = new CheckBoxField({
    id: '#w622-setTargetSideClass',
    onChange: (val) => widget.setTargetSideClass(val ? 'claseladodestino' : ''),
  });

  var setGroupWidth = new CheckBoxField({
    id: '#w622-setGroupWidth',
    onChange: (val) => widget.setGroupWidth(val ? 50 : 15),
  });

  var setGroupPadding = new CheckBoxField({
    id: '#w622-setGroupPadding',
    onChange: (val) => widget.setGroupPadding(val ? 0.3 : 0.015),
  });

  var setGroupPaddingPercent = new CheckBoxField({
    id: '#w622-setGroupPaddingPercent',
    onChange: (val) => widget.setGroupPaddingPercent(val ? 35 : 50),
  });

  var setSourceColoredChords = new CheckBoxField({
    id: '#w622-setSourceColoredChords',
    onChange: (val) => widget.setSourceColoredChords(val),
  });

  var setSubgroups = new CheckBoxField({
    id: '#w622-setSubgroups',
    onChange: (val) => widget.setSubgroups(val),
  });

  var setSubgroupWidth = new CheckBoxField({
    id: '#w622-setSubgroupWidth',
    onChange: (val) => widget.setSubgroupWidth(val ? '50%' : '33%'),
  });

  var setLabels = new CheckBoxField({
    id: '#w622-setLabels',
    onChange: (val) => widget.setLabels(val),
  });

  var setLabelMaxWidth = new CheckBoxField({
    id: '#w622-setLabelMaxWidth',
    onChange: (val) => widget.setLabelMaxWidth(val ? '12%' : '20%'),
  });

  var setLabelHeightScale = new CheckBoxField({
    id: '#w622-setLabelHeightScale',
    onChange: (val) => widget.setLabelHeightScale(val ? '54%' : '80%'),
  });

  var setLabelMaxDensity = new CheckBoxField({
    id: '#w622-setLabelMaxDensity',
    onChange: (val) => widget.setLabelMaxDensity(val ? '54%' : '80%'),
  });

  var setLabelMinHeight = new CheckBoxField({
    id: '#w622-setLabelMinHeight',
    onChange: (val) => widget.setLabelMinHeight(val ? 8 : 5),
  });

  var setLabelLeadersWidth = new CheckBoxField({
    id: '#w622-setLabelLeadersWidth',
    onChange: (val) => widget.setLabelLeadersWidth(val ? '50%' : '33%'),
  });

  var setLabelColour = new CheckBoxField({
    id: '#w622-setLabelColour',
    onChange: (val) => widget.setLabelColour(val ? 'red' : 'black'),
  });

  var setShowLegend = new CheckBoxField({
    id: '#w622-setShowLegend',
    onChange: (val) => widget.setShowLegend(val),
  });

  var setSwapped = new CheckBoxField({
    id: '#w622-setSwapped',
    onChange: (val) => widget.setSwapped(val),
  });

  var setPeriodNavigation = new CheckBoxField({
    id: '#w622-setPeriodNavigation',
    onChange: (val) => widget.setPeriodNavigation(val),
  });

  var setLegendBgColor = new CheckBoxField({
    id: '#w622-setLegendBgColor',
    onChange: (val) =>
      widget.setLegendBgColor(val ? 'rgb(132,132,132)' : 'rgb(32,32,32)'),
  });

  var setLegendFontColor = new CheckBoxField({
    id: '#w622-setLegendFontColor',
    onChange: (val) =>
      widget.setLegendFontColor(val ? 'rgb(90,90,90)' : 'rgb(190,190,190)'),
  });

  var setDisplayLimits = new CheckBoxField({
    id: '#w622-setDisplayLimits',
    onChange: (val) => widget.setDisplayLimits(val ? 33 : 50),
  });

  var setPercentile = new CheckBoxField({
    id: '#w622-setPercentile',
    onChange: (val) => widget.setPercentile(val ? 25 : 0),
  });

  var setclickToLockLegend = new CheckBoxField({
    id: '#w622-setclickToLockLegend',
    onChange: (val) => widget.setclickToLockLegend(val),
  });

  return widget;
}
