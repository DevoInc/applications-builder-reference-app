import columnWidget from '@devoinc/applications-builder/widgets/column';
import linesWidget from '@devoinc/applications-builder/widgets/lines';
import stackedBarsWidget from '@devoinc/applications-builder/widgets/stackedBars';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

function w211() {
  let widget = columnWidget('w211');
  widget.setRequests([requests.get('seriesData')], true);
  widget.setKeys('method');
  widget.setValue('timeTaken');
  widget.setGrouping('minute');
  widget.validateRequests((data) => {
    console.log(data);
  });
  widget.normalize((data) => {
    console.log(data);
  });
  widget.setSeriesNames(['Serie One', 'Serie Two']);

  var setYscaleType = new CheckBoxField({
    id: '#w212-setYscaleType',
    onChange: (val) => {
      if (val) {
        widget.setYscaleType('logarithmic');
      } else {
        widget.setYscaleType('');
      }
    },
  });
  var setLegend = new CheckBoxField({
    id: '#w212-setLegend',
    onChange: (val) => {
      if (val) {
        widget.setLegend(true);
      } else {
        widget.setLegend(false);
      }
    },
  });

  var setToBytes = new CheckBoxField({
    id: '#w212-setToBytes',
    onChange: (val) => {
      if (val) {
        widget.setToBytes(true);
      } else {
        widget.setToBytes(false);
      }
    },
  });
  var setXAxisFormatter = new CheckBoxField({
    id: '#w212-setXAxisFormatter',
    onChange: (val) => {
      if (val) {
        widget.setXAxisFormatter(function () {
          return this.value + ' dias';
        });
      } else {
        widget.setXAxisFormatter(function () {
          return this.value;
        });
      }
    },
  });
  var setAccumulated = new CheckBoxField({
    id: '#w212-setAccumulated',
    onChange: (val) => {
      if (val) {
        widget.setAccumulated(true);
      } else {
        widget.setAccumulated(false);
      }
    },
  });
  var setDiscardMethod = new CheckBoxField({
    id: '#w212-setDiscardMethod',
    onChange: (val) => {
      if (val) {
        widget.setAccumulated('stdDev');
      } else {
        widget.setAccumulated('');
      }
    },
  });
  var setShowAvgLine = new CheckBoxField({
    id: '#w212-setShowAvgLine',
    onChange: (val) => {
      if (val) {
        widget.setShowAvgLine(true);
      } else {
        widget.setShowAvgLine(false);
      }
    },
  });
  var setYscaleType = new CheckBoxField({
    id: '#w212-setYscaleType',
    onChange: (val) => {
      if (val) {
        widget.setYscaleType('logarithmic');
      } else {
        widget.setYscaleType('');
      }
    },
  });
  var sharedFormatter = new CheckBoxField({
    id: '#w212-sharedFormatter',
    onChange: (val) => {
      if (val) {
        widget.sharedFormatter(true);
      } else {
        widget.sharedFormatter(false);
      }
    },
  });
  var setGrouping = new CheckBoxField({
    id: '#w212-setGrouping',
    onChange: (val) => {
      if (val) {
        widget.setGrouping('hour');
      } else {
        widget.setGrouping('minute');
      }
    },
  });

  var setToBytes = new CheckBoxField({
    id: '#w212-setToBytes',
    onChange: (val) => {
      if (val) {
        widget.setToBytes();
      } else {
        widget.setYAxisLabelsFormatter(function () {
          return this.value + ' mil cosas';
        });
      }
    },
  });

  var setDiscardMode = new SelectField({
    id: '#w212-setDiscardMode',
    onChange: (val) => widget.setDiscardMode(val),
    default: '',
  });
  var setRegressionLine = new SelectField({
    id: '#w212-setRegressionLine',
    onChange: (val) => widget.setRegressionLine(val),
    default: '',
  });

  var setFixedData = new CheckBoxField({
    id: '#w212-setFixedData',
    onChange: (val) => {
      if (val) {
        widget.setFixedData(true);
      } else {
        widget.setFixedData(false);
      }
    },
  });

  var setFormat = new InputField({
    id: '#w212-setFormat',
    default: '',
    onChange: (val) => {
      widget.setFormat(val);
    },
  });

  var setYAxisTitle = new InputField({
    id: '#w212-setFormat',
    default: '',
    onChange: (val) => {
      widget.setYAxisTitle(val);
    },
  });

  var setYAxisLabelsFormatter = new InputField({
    id: '#w212-setYAxisLabelsFormatter',
    default: '{value} mil cosas',
    onChange: (val) =>
      widget.setYAxisLabelsFormatter(function () {
        return val;
      }),
  });

  var button = new Button({
    id: '#w212-button',
    onClick: () => widget.refresh(),
  });

  return widget;
}

function w221() {
  let widget = linesWidget('w221');
  widget.setRequests([requests.get('seriesData')]);
  widget.setKeys('method');
  widget.setValue('timeTaken');
  widget.setGrouping('minute');
  widget.setSeriesNames(['Ping', 'Pong']);

  var setYscaleType = new CheckBoxField({
    id: '#w222-setYscaleType',
    onChange: (val) => {
      if (val) {
        widget.setYscaleType('logarithmic');
      } else {
        widget.setYscaleType('');
      }
    },
  });
  var setLegend = new CheckBoxField({
    id: '#w222-setLegend',
    onChange: (val) => {
      if (val) {
        widget.setLegend(true);
      } else {
        widget.setLegend(false);
      }
    },
  });

  var setToBytes = new CheckBoxField({
    id: '#w222-setToBytes',
    onChange: (val) => {
      if (val) {
        widget.setToBytes(true);
      } else {
        widget.setToBytes(false);
      }
    },
  });
  var setXAxisFormatter = new CheckBoxField({
    id: '#w222-setXAxisFormatter',
    onChange: (val) => {
      if (val) {
        widget.setXAxisFormatter(function () {
          return this.value + ' dias';
        });
      } else {
        widget.setXAxisFormatter(function () {
          return this.value;
        });
      }
    },
  });
  var setAccumulated = new CheckBoxField({
    id: '#w222-setAccumulated',
    onChange: (val) => {
      if (val) {
        widget.setAccumulated(true);
      } else {
        widget.setAccumulated(false);
      }
    },
  });
  var setHighlightMaxMin = new CheckBoxField({
    id: '#w222-setHighlightMaxMin',
    onChange: (val) => {
      if (val) {
        widget.setHighlightMaxMin(true);
      } else {
        widget.setHighlightMaxMin(false);
      }
    },
  });
  var setDiscardMethod = new CheckBoxField({
    id: '#w222-setDiscardMethod',
    onChange: (val) => {
      if (val) {
        widget.setAccumulated('stdDev');
      } else {
        widget.setAccumulated('');
      }
    },
  });
  var setShowAvgLine = new CheckBoxField({
    id: '#w222-setShowAvgLine',
    onChange: (val) => {
      if (val) {
        widget.setShowAvgLine(true);
      } else {
        widget.setShowAvgLine(false);
      }
    },
  });
  var setYscaleType = new CheckBoxField({
    id: '#w222-setYscaleType',
    onChange: (val) => {
      if (val) {
        widget.setYscaleType('logarithmic');
      } else {
        widget.setYscaleType('');
      }
    },
  });
  var sharedFormatter = new CheckBoxField({
    id: '#w222-sharedFormatter',
    onChange: (val) => {
      if (val) {
        widget.sharedFormatter(true);
      } else {
        widget.sharedFormatter(false);
      }
    },
  });
  var setTop = new CheckBoxField({
    id: '#w222-setTop',
    onChange: (val) => {
      if (val) {
        widget.setTop(3);
      } else {
        widget.setTop(6);
      }
    },
  });

  var setToBytes = new CheckBoxField({
    id: '#w222-setToBytes',
    onChange: (val) => {
      if (val) {
        widget.setToBytes();
      } else {
        widget.setYAxisLabelsFormatter(function () {
          return this.value + ' mil cosas';
        });
      }
    },
  });

  var setDiscardMode = new SelectField({
    id: '#w222-setDiscardMode',
    onChange: (val) => widget.setDiscardMode(val),
    default: '',
  });
  var setRegressionLine = new SelectField({
    id: '#w222-setRegressionLine',
    onChange: (val) => widget.setRegressionLine(val),
    default: '',
  });
  var setFormat = new InputField({
    id: '#w222-setFormat',
    default: '',
    onChange: (val) => {
      widget.setFormat(val);
    },
  });

  var setYAxisTitle = new InputField({
    id: '#w222-setFormat',
    default: '',
    onChange: (val) => {
      widget.setYAxisTitle(val);
    },
  });

  var setYAxisLabelsFormatter = new InputField({
    id: '#w222-setYAxisLabelsFormatter',
    default: '{value} mil cosas',
    onChange: (val) =>
      widget.setYAxisLabelsFormatter(function () {
        return val;
      }),
  });

  var button = new Button({
    id: '#w222-button',
    onClick: () => widget.refresh(),
  });

  return widget;
}

function w231() {
  let widget = stackedBarsWidget('w231');
  widget.setRequests([requests.get('seriesData')]);
  widget.setKeys('method');
  widget.setGrouping('minute');
  widget.setValue('timeTaken');

  var setYscaleType = new CheckBoxField({
    id: '#w232-setYscaleType',
    onChange: (val) => {
      if (val) {
        widget.setYscaleType('logarithmic');
      } else {
        widget.setYscaleType('');
      }
    },
  });
  var setLegend = new CheckBoxField({
    id: '#w232-setLegend',
    onChange: (val) => {
      if (val) {
        widget.setLegend(true);
      } else {
        widget.setLegend(false);
      }
    },
  });

  var setToBytes = new CheckBoxField({
    id: '#w232-setToBytes',
    onChange: (val) => {
      if (val) {
        widget.setToBytes(true);
      } else {
        widget.setToBytes(false);
      }
    },
  });
  var setXAxisFormatter = new CheckBoxField({
    id: '#w232-setXAxisFormatter',
    onChange: (val) => {
      if (val) {
        widget.setXAxisFormatter(function () {
          return this.value + ' dias';
        });
      } else {
        widget.setXAxisFormatter(function () {
          return this.value;
        });
      }
    },
  });
  var setAccumulated = new CheckBoxField({
    id: '#w232-setAccumulated',
    onChange: (val) => {
      if (val) {
        widget.setAccumulated(true);
      } else {
        widget.setAccumulated(false);
      }
    },
  });

  var setDiscardMethod = new CheckBoxField({
    id: '#w232-setDiscardMethod',
    onChange: (val) => {
      if (val) {
        widget.setAccumulated('stdDev');
      } else {
        widget.setAccumulated('');
      }
    },
  });
  var setShowAvgLine = new CheckBoxField({
    id: '#w232-setShowAvgLine',
    onChange: (val) => {
      if (val) {
        widget.setShowAvgLine(true);
      } else {
        widget.setShowAvgLine(false);
      }
    },
  });
  var setYscaleType = new CheckBoxField({
    id: '#w232-setYscaleType',
    onChange: (val) => {
      if (val) {
        widget.setYscaleType('logarithmic');
      } else {
        widget.setYscaleType('');
      }
    },
  });
  var sharedFormatter = new CheckBoxField({
    id: '#w232-sharedFormatter',
    onChange: (val) => {
      if (val) {
        widget.sharedFormatter(true);
      } else {
        widget.sharedFormatter(false);
      }
    },
  });
  var setTop = new CheckBoxField({
    id: '#w232-setTop',
    onChange: (val) => {
      if (val) {
        widget.setTop(3);
      } else {
        widget.setTop(6);
      }
    },
  });
  var setGrouping = new CheckBoxField({
    id: '#w232-setGrouping',
    onChange: (val) => {
      if (val) {
        widget.setGrouping('hour');
      } else {
        widget.setGrouping('minute');
      }
    },
  });

  var setToBytes = new CheckBoxField({
    id: '#w232-setToBytes',
    onChange: (val) => {
      if (val) {
        widget.setToBytes();
      } else {
        widget.setYAxisLabelsFormatter(function () {
          return this.value + ' mil cosas';
        });
      }
    },
  });

  var setDiscardMode = new SelectField({
    id: '#w232-setDiscardMode',
    onChange: (val) => widget.setDiscardMode(val),
    default: '',
  });
  var setRegressionLine = new SelectField({
    id: '#w232-setRegressionLine',
    onChange: (val) => widget.setRegressionLine(val),
    default: '',
  });

  var setFixedData = new CheckBoxField({
    id: '#w232-setFixedData',
    onChange: (val) => {
      if (val) {
        widget.setFixedData(true);
      } else {
        widget.setFixedData(false);
      }
    },
  });

  var setFormat = new InputField({
    id: '#w232-setFormat',
    default: '',
    onChange: (val) => {
      widget.setFormat(val);
    },
  });

  var setYAxisTitle = new InputField({
    id: '#w232-setFormat',
    default: '',
    onChange: (val) => {
      widget.setYAxisTitle(val);
    },
  });

  var setYAxisLabelsFormatter = new InputField({
    id: '#w232-setYAxisLabelsFormatter',
    default: '{value} mil cosas',
    onChange: (val) =>
      widget.setYAxisLabelsFormatter(function () {
        return val;
      }),
  });

  var button = new Button({
    id: '#w232-button',
    onClick: () => widget.refresh(),
  });

  return widget;
}

export default [w211, w221, w231];
