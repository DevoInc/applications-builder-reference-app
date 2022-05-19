import circleWorldMap from '@devoinc/applications-builder/widgets/circleWorldMap';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

const MAP_TYPES = {
  roadmap: google.maps.MapTypeId.ROADMAP,
  satellite: google.maps.MapTypeId.SATELLITE,
  hybrid: google.maps.MapTypeId.HYBRID,
  terrain: google.maps.MapTypeId.TERRAIN,
};

export default function buildw321() {
  let widget = circleWorldMap('w321');
  widget.setRequests([requests.get('map')]);
  widget.setKeys({ lat: 'lat', lon: 'lon' });
  widget.setValue('count');

  widget.setMapTypeControl(false);
  widget.setMapTypeId(MAP_TYPES.roadmap);
  // -- deprecated
  //widget.setPanControl(true);
  widget.setScaleControl(false);
  widget.setStreetViewControl(false);
  widget.setZoomControl(false);
  widget.setPresetStyles('standard');

  var button = new Button({
    id: '#w322-button',
    onClick: () => widget.refresh(),
  });

  var setMapTypeControl = new CheckBoxField({
    id: '#w322-setMapTypeControl',
    onChange: (val) => widget.setMapTypeControl(val),
  });

  var setMapTypeId = new SelectField({
    id: '#w322-setMapTypeId',
    onChange: (val) => widget.setMapTypeId(MAP_TYPES[val]),
    default: MAP_TYPES.roadmap,
  });

  var setScaleControl = new CheckBoxField({
    id: '#w322-setScaleControl',
    onChange: (val) => widget.setScaleControl(val),
  });

  var setStreetViewControl = new CheckBoxField({
    id: '#w322-setStreetViewControl',
    onChange: (val) => widget.setStreetViewControl(val),
  });

  var setZoomControl = new CheckBoxField({
    id: '#w322-setZoomControl',
    onChange: (val) => widget.setZoomControl(val),
  });

  var setStyles = new SelectField({
    id: '#w322-setStyles',
    default: 'standard',
    onChange: (val) => widget.setPresetStyles(val),
  });

  return widget;
}
