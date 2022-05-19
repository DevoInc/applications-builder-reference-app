import graph from '@devoinc/applications-builder/widgets/graph';
import dataConversor from '@devoinc/applications-data-library/utils/dataConversor';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw511() {
  let widget = graph('w511');
  widget.setRequests([requests.get('graph')]);
  widget.setTypes([
    {
      // computer
      name: 'type-0',
      color: 'rgb(57,106,177)',
      icon: 'computer_desktop',
      palette: 'standard',
    },
    {
      //event_simpleName
      name: 'type-1',
      color: 'rgb(216,126,58)',
      icon: null,
      palette: 'standard',
    },
  ]);
  widget.setNodes([
    { name: 'computer', type: 'type-0', links: ['event_simpleName'] },
    { name: 'event_simpleName', type: 'type-1' },
  ]);
  widget.setFields([
    { name: 'computer', type: 'str' },
    { name: 'event_simpleName', type: 'str' },
    { name: 'coords', type: 'obj' },
    { name: 'coords2', type: 'obj' },
  ]);
  widget.process = (data) => {
    data.keys.push({ name: 'coords2', type: 'geocoord' });
    data.dataMatrix = data.dataMatrix.map((e) => {
      e[5] = { lat: e[3], lon: e[4] };
      e[6] = { lat: e[3], lon: e[4] };
      return e;
    });
    return data;
  };
  var button = new Button({
    id: '#w512-button',
    onClick: () => widget.refresh(),
  });

  var setAttrs = new CheckBoxField({
    id: '#w512-setAttrs',
    onChange: (val) =>
      widget.setAttrs(
        val
          ? [
              { name: 'coords', node: 'computer', role: 'position' },
              { name: 'coords2', node: 'event_simpleName', role: 'position' },
            ]
          : []
      ),
  });

  var setLinks = new CheckBoxField({
    id: '#w512-setLinks',
    onChange: (val) =>
      widget.setLinks(
        val ? [{ name: 'count', node: 'event_simpleName', role: 'size' }] : []
      ),
  });

  var setLinkWidthDeltaColumns = new CheckBoxField({
    id: '#w512-setLinkWidthDeltaColumns',
    onChange: (val) => widget.setLinkWidthDeltaColumns(val ? 'count' : null),
  });

  var setNodeSizesInitialMode = new SelectField({
    id: '#w512-setNodeSizesInitialMode',
    default: 'links-all-sum',
    onChange: (val) => widget.setNodeSizesInitialMode(val),
  });

  return widget;
}
