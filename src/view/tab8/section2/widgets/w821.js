import heatCalendar from '@devoinc/applications-builder/widgets/heatCalendar';
import dataConversor from '@devoinc/applications-data-library/utils/dataConversor';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw821() {
  let widget = heatCalendar('w821');
  widget.setRequests([requests.get('heatcalendar')]);

  widget.setTimestampKey('eventdate');
  widget.setValue('count');

  var button = new Button({
    id: '#w822-button',
    onClick: () => widget.refresh(),
  });

  var setValueExtent = new CheckBoxField({
    id: '#w822-setValueExtent',
    onChange: (val) => widget.setValueExtent(val ? [0, 20] : null),
  });

  var setDayLineColor = new CheckBoxField({
    id: '#w822-setDayLineColor',
    onChange: (val) => widget.setDayLineColor(val ? 'red' : ''),
  });

  var setMonthLineColor = new CheckBoxField({
    id: '#w822-setMonthLineColor',
    onChange: (val) => widget.setMonthLineColor(val ? 'red' : ''),
  });

  var setMonthLabelColor = new CheckBoxField({
    id: '#w822-setMonthLabelColor',
    onChange: (val) => widget.setMonthLabelColor(val ? 'red' : ''),
  });

  var setLeyendMaxValColor = new CheckBoxField({
    id: '#w822-setLeyendMaxValColor',
    onChange: (val) => widget.setLeyendMaxValColor(val ? 'red' : ''),
  });

  var setLeyendMinValColor = new CheckBoxField({
    id: '#w822-setLeyendMinValColor',
    onChange: (val) => widget.setLeyendMinValColor(val ? 'red' : ''),
  });

  var setWeekDayFontColor = new CheckBoxField({
    id: '#w822-setWeekDayFontColor',
    onChange: (val) => widget.setWeekDayFontColor(val ? 'red' : ''),
  });

  var setLegendSelectorColor = new CheckBoxField({
    id: '#w822-setLegendSelectorColor',
    onChange: (val) => widget.setLegendSelectorColor(val ? 'red' : ''),
  });

  var setWeekDaysLabels = new CheckBoxField({
    id: '#w822-setWeekDaysLabels',
    onChange: (val) =>
      widget.setWeekDaysLabels(
        val
          ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          : ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      ),
  });

  var setMoveDaysLabels = new CheckBoxField({
    id: '#w822-setMoveDaysLabels',
    onChange: (val) => widget.setMoveDaysLabels(val),
  });

  var setMondayFirst = new CheckBoxField({
    id: '#w822-setMondayFirst',
    onChange: (val) => widget.setMondayFirst(val),
  });

  var setToBytes = new CheckBoxField({
    id: '#w822-setToBytes',
    onChange: (val) => widget.setToBytes(val),
  });

  var setDisplayWeekDays = new CheckBoxField({
    id: '#w822-setDisplayWeekDays',
    onChange: (val) => widget.setDisplayWeekDays(val),
  });

  var setDisplayDayLegend = new CheckBoxField({
    id: '#w822-setDisplayDayLegend',
    onChange: (val) => widget.setDisplayDayLegend(val),
  });

  var setDisplayMark = new CheckBoxField({
    id: '#w822-setDisplayMark',
    onChange: (val) => widget.setDisplayMark(val),
  });

  var setOpacity = new CheckBoxField({
    id: '#w822-setOpacity',
    onChange: (val) => widget.setOpacity(val ? 0.5 : 1),
  });

  var setLeftmargin = new CheckBoxField({
    id: '#w822-setLeftmargin',
    onChange: (val) => widget.setLeftmargin(val ? 20 : 12),
  });

  var setTopmargin = new CheckBoxField({
    id: '#w822-setTopmargin',
    onChange: (val) => widget.setTopmargin(val ? 20 : 50),
  });

  var setlabelmargin = new CheckBoxField({
    id: '#w822-setlabelmargin',
    onChange: (val) => widget.setlabelmargin(val ? 20 : 35),
  });

  var setDisplayScale = new CheckBoxField({
    id: '#w822-setDisplayScale',
    onChange: (val) => widget.setDisplayScale(val),
  });

  var setScaleMargin = new CheckBoxField({
    id: '#w822-setScaleMargin',
    onChange: (val) => widget.setScaleMargin(val ? 20 : 30),
  });

  var setScaleheight = new CheckBoxField({
    id: '#w822-setScaleheight',
    onChange: (val) => widget.setScaleheight(val ? 20 : 15),
  });

  var setScalesize = new CheckBoxField({
    id: '#w822-setScalesize',
    onChange: (val) => widget.setScalesize(val ? [0.15, 0.85] : [0.25, 0.75]),
  });

  var setColorScale = new CheckBoxField({
    id: '#w822-setColorScale',
    onChange: (val) =>
      widget.setColorScale(
        val
          ? [
              d3.rgb('#111111'),
              d3.rgb('#555555'),
              d3.rgb('#888888'),
              d3.rgb('#AAAAAA'),
              d3.rgb('#CCCCCC'),
            ]
          : [
              d3.rgb('#006837'),
              d3.rgb('#1A9863'),
              d3.rgb('#66BD63'),
              d3.rgb('#A6D96A'),
              d3.rgb('#D9EF8B'),
              d3.rgb('#FFFFBF'),
              d3.rgb('#FEE08B'),
              d3.rgb('#FDAE61'),
              d3.rgb('#F46D43'),
              d3.rgb('#D73027'),
              d3.rgb('#A50026'),
            ]
      ),
  });

  // none, log, arctag
  var setDataOperation = new CheckBoxField({
    id: '#w822-setDataOperation',
    onChange: (val) => widget.setDataOperation(val ? 'log' : 'none'),
  });

  var setMinPercentilColor = new CheckBoxField({
    id: '#w822-setMinPercentilColor',
    onChange: (val) =>
      widget.setMinPercentilColor(val ? d3.rgb('#94D7A3') : d3.rgb('#87CEEB')),
  });

  var setMaxPercentilColor = new CheckBoxField({
    id: '#w822-setMaxPercentilColor',
    onChange: (val) =>
      widget.setMaxPercentilColor(val ? d3.rgb('#198343') : d3.rgb('#BA55D3')),
  });

  var setMinPercentil = new CheckBoxField({
    id: '#w822-setMinPercentil',
    onChange: (val) => widget.setMinPercentil(val ? 15 : null),
  });

  var setMaxPercentil = new CheckBoxField({
    id: '#w822-setMaxPercentil',
    onChange: (val) => widget.setMaxPercentil(val ? 85 : null),
  });

  var setDiscardMethod = new CheckBoxField({
    id: '#w822-setDiscardMethod',
    onChange: (val) => widget.setDiscardMethod(val ? 'stdDev' : 'none'),
  });

  var setDisplaySelectors = new CheckBoxField({
    id: '#w822-setDisplaySelectors',
    onChange: (val) => widget.setDisplaySelectors(val),
  });

  return widget;
}
