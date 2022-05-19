import tree from '@devoinc/applications-builder/widgets/tree';
import dataConversor from '@devoinc/applications-data-library/utils/dataConversor';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw1021() {
  let widget = tree('w1021');
  widget.setRequests([requests.get('sankey')]);

  widget.setKeys(['ip', 'method']);
  widget.setValue('count');

  var button = new Button({
    id: '#w1022-button',
    onClick: () => widget.refresh(),
  });

  var setColors = new CheckBoxField({
    id: '#w1022-setColors',
    onChange: (val) =>
      widget.setColors(
        val
          ? ['red', 'green', 'blue']
          : [
              '#bd0026',
              '#fecc5c',
              '#fd8d3c',
              '#f03b20',
              '#B02D5D',
              '#9B2C67',
              '#982B9A',
              '#692DA7',
              '#5725AA',
              '#4823AF',
              '#d7b5d8',
              '#dd1c77',
              '#5A0C7A',
              '#5A0C7A',
            ]
      ),
  });

  var setMaxDepth = new CheckBoxField({
    id: '#w1022-setMaxDepth',
    onChange: (val) => widget.setMaxDepth(val ? 1 : 3),
  });

  var setIsValueCount = new CheckBoxField({
    id: '#w1022-setIsValueCount',
    onChange: (val) => widget.setIsValueCount(val),
  });

  var setIsZoomEnabled = new CheckBoxField({
    id: '#w1022-setIsZoomEnabled',
    onChange: (val) => widget.setIsZoomEnabled(val),
  });

  var setZoom = new CheckBoxField({
    id: '#w1022-setZoom',
    onChange: (val) => widget.setZoom(val),
  });

  var setMinRadius = new CheckBoxField({
    id: '#w1022-setMinRadius',
    onChange: (val) => widget.setMinRadius(val ? 3 : 1),
  });

  var setMinCircleRadius = new CheckBoxField({
    id: '#w1022-setMinCircleRadius',
    onChange: (val) => widget.setMinCircleRadius(val ? 20 : 10),
  });

  var setMaxRadius = new CheckBoxField({
    id: '#w1022-setMaxRadius',
    onChange: (val) => widget.setMaxRadius(val ? 50 : Infinity),
  });

  var setSvgMargin = new CheckBoxField({
    id: '#w1022-setSvgMargin',
    onChange: (val) => widget.setSvgMargin(val ? 10 : 5),
  });

  var setNumMaxElem = new CheckBoxField({
    id: '#w1022-setNumMaxElem',
    onChange: (val) => widget.setNumMaxElem(val ? 1 : 50),
  });

  var setFontColour = new CheckBoxField({
    id: '#w1022-setFontColour',
    onChange: (val) => widget.setFontColour(val ? 'red' : 'white'),
  });

  var setMaxFontSize = new CheckBoxField({
    id: '#w1022-setMaxFontSize',
    onChange: (val) => widget.setMaxFontSize(val ? 1 : 15),
  });

  return widget;
}
