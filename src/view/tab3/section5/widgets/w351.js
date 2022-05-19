import pewPewMap from '@devoinc/applications-builder/widgets/pewPewMap';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';

export default function buildw351() {
  let widget = pewPewMap('w351');
  widget.setRequests([requests.get('mapPewPew')]);
  widget.setKeys({
    from: { lat: 'from_lat', lon: 'from_lon' },
    to: { lat: 'to_lat', lon: 'to_lon' },
  });
  widget.setValue('count');
  widget.setPlay(false);

  let button = new Button({
    id: '#w352-button',
    onClick: () => widget.refresh(),
  });

  let setLabelsKeys = new CheckBoxField({
    id: '#w352-setLabelsKeys',
    onChange: (val) => {
      let labels = val ? { from: 'method', to: 'method' } : {};
      widget.setLabelsKeys(labels);
    },
  });

  let setColorKey = new CheckBoxField({
    id: '#w352-setColorKey',
    onChange: (val) => {
      widget.setColorKey(val ? 'color' : '');
    },
  });

  let setVisible = new CheckBoxField({
    id: '#w352-setVisible',
    default: true,
    onChange: (val) => {
      widget.setVisible(val);
    },
  });

  let setGradient = new CheckBoxField({
    id: '#w352-setGradient',
    onChange: (val) => widget.setGradient(val ? 1 : 0),
  });

  let setGradients = new CheckBoxField({
    id: '#w352-setGradients',
    onChange: (val) => {
      let gradients = val ? [['#FF0000', '#00FF00'], ['#0000FF']] : [[]];
      widget.setGradients(gradients);
    },
  });

  let setUseGradient = new CheckBoxField({
    id: '#w352-setUseGradient',
    onChange: (val) => widget.setUseGradient(val),
  });

  let setCustomStyle = new CheckBoxField({
    id: '#w352-setCustomStyle',
    default: true,
    onChange: (val) => widget.setCustomStyle(val),
  });

  let setSortDescending = new CheckBoxField({
    id: '#w352-setSortDescending',
    default: true,
    onChange: (val) => widget.setSortDescending(val),
  });

  let setDefaultColor = new CheckBoxField({
    id: '#w352-setDefaultColor',
    onChange: (val) => widget.setDefaultColor(val ? '#F037B1' : null),
  });

  let setFitToBounds = new CheckBoxField({
    id: '#w352-setFitToBounds',
    default: true,
    onChange: (val) => widget.setFitToBounds(val),
  });

  let setDataOperation = new CheckBoxField({
    id: '#w352-setDataOperation',
    onChange: (val) => widget.setDataOperation(val ? 'arctag' : null),
  });

  let setSkipLimit = new CheckBoxField({
    id: '#w352-setSkipLimit',
    onChange: (val) => widget.setSkipLimit(val),
  });

  let setElementsLimit = new CheckBoxField({
    id: '#w352-setElementsLimit',
    onChange: (val) => widget.setElementsLimit(val ? 1 : null),
  });

  let setType = new CheckBoxField({
    id: '#w352-setType',
    onChange: (val) => widget.setType(val ? 'hybrid' : 'roadmap'),
  });

  return widget;
}
