import googleHeatMap from '@devoinc/applications-builder/widgets/googleHeatMap';
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

const STYLES = {
  standard: require('@devoinc/applications-builder/widgets/presets/googleMaps/standard.json'),
  dark: require('@devoinc/applications-builder/widgets/presets/googleMaps/dark.json'),
  night: require('@devoinc/applications-builder/widgets/presets/googleMaps/night.json'),
  retro: require('@devoinc/applications-builder/widgets/presets/googleMaps/retro.json'),
  silver: require('@devoinc/applications-builder/widgets/presets/googleMaps/silver.json'),
  aubergine: require('@devoinc/applications-builder/widgets/presets/googleMaps/aubergine.json'),
};

const CENTERS = {
  madrid: new google.maps.LatLng(40.4167754, -3.7037902),
  newyork: new google.maps.LatLng(40.768379, -73.965787),
  tokyo: new google.maps.LatLng(35.70068, 139.775459),
  catIsland: new google.maps.LatLng(33.735722, 132.481363),
  myHouse: new google.maps.LatLng(40.3425, -3.520831),
};

const MAP_TYPE_OPTIONS = {
  default: { position: 1, style: 1 },
  alternative: { position: 2, style: 2 },
};

const ZOOM_OPTIONS = {
  default: { position: 1, style: 1 },
  alternative: { position: 2, style: 2 },
};

const STREET_VIEW_OPTIONS = {
  default: { position: 1, style: 1 },
  alternative: { position: 2, style: 2 },
};

export default function buildw341() {
  let widget = googleHeatMap('w341');
  widget.setRequests([requests.get('map')]);
  widget.setKeys({ lat: 'lat', lon: 'lon' });
  widget.setValue('count');

  widget.setMapTypeControl(false);
  widget.setMapTypeId(MAP_TYPES.roadmap);
  // -- deprecated
  //widget.setPanControl(true);
  widget.setRotateControl(false);
  widget.setScaleControl(false);
  widget.setStreetViewControl(false);
  widget.setZoomControl(false);
  widget.setDissipating(false);
  widget.setGradient(0);
  widget.setRadius(10);
  widget.setOpacity(0.5);
  widget.setStyles(STYLES.standard);
  widget.setZoom(5);
  widget.setCenter(new google.maps.LatLng(40.4167754, -3.7037902));
  widget.setDataOperation('none');
  widget.setScrollwheel(false);
  widget.setMapTypeControlOptions(MAP_TYPE_OPTIONS.default);
  // -- deprecated
  // widget.setPanControlOptions({ position: 3 });
  widget.setZoomControlOptions(ZOOM_OPTIONS.default);
  widget.setStreetViewControlOptions(STREET_VIEW_OPTIONS.default);

  var button = new Button({
    id: '#w342-button',
    onClick: () => widget.refresh(),
  });

  var setMapTypeControl = new CheckBoxField({
    id: '#w342-setMapTypeControl',
    onChange: (val) => widget.setMapTypeControl(val),
  });

  var setMapTypeId = new SelectField({
    id: '#w342-setMapTypeId',
    onChange: (val) => widget.setMapTypeId(MAP_TYPES[val]),
    default: MAP_TYPES.roadmap,
  });

  var setRotateControl = new CheckBoxField({
    id: '#w342-setRotateControl',
    onChange: (val) => widget.setRotateControl(val),
  });

  var setScaleControl = new CheckBoxField({
    id: '#w342-setScaleControl',
    onChange: (val) => widget.setScaleControl(val),
  });

  var setStreetViewControl = new CheckBoxField({
    id: '#w342-setStreetViewControl',
    onChange: (val) => widget.setStreetViewControl(val),
  });

  var setZoomControl = new CheckBoxField({
    id: '#w342-setZoomControl',
    onChange: (val) => widget.setZoomControl(val),
  });

  var setDissipating = new CheckBoxField({
    id: '#w342-setDissipating',
    onChange: (val) => widget.setDissipating(val),
  });

  var setGradient = new SelectField({
    id: '#w342-setGradient',
    default: '0',
    onChange: (val) => widget.setGradient(Number(val)),
  });

  var setRadius = new InputField({
    id: '#w342-setRadius',
    default: '10',
    onChange: (val) => widget.setRadius(Number(val)),
  });

  var setOpacity = new InputField({
    id: '#w342-setOpacity',
    default: '0.5',
    onChange: (val) => widget.setOpacity(Number(val)),
  });

  var setStyles = new SelectField({
    id: '#w342-setStyles',
    default: 'standard',
    onChange: (val) => widget.setStyles(STYLES[val]),
  });

  var setZoom = new InputField({
    id: '#w342-setzoom',
    default: '1',
    onChange: (val) => widget.setZoom(Number(val)),
  });

  var setCenter = new SelectField({
    id: '#w342-setCenter',
    default: 'madrid',
    onChange: (val) => widget.setCenter(CENTERS[val]),
  });

  var setDataOperation = new SelectField({
    id: '#w342-setDataOperation',
    default: 'none',
    onChange: (val) => widget.setDataOperation(val),
  });

  var setScrollwheel = new CheckBoxField({
    id: '#w342-setScrollwheel',
    onChange: (val) => widget.setScrollwheel(val),
  });

  var setMapTypeControlOptions = new SelectField({
    id: '#w342-setMapTypeControlOptions',
    default: 'default',
    onChange: (val) => widget.setMapTypeControlOptions(MAP_TYPE_OPTIONS[val]),
  });

  var setZoomControlOptions = new SelectField({
    id: '#w342-setZoomControlOptions',
    default: 'default',
    onChange: (val) => widget.setZoomControlOptions(ZOOM_OPTIONS[val]),
  });

  var setStreetViewControlOptions = new SelectField({
    id: '#w342-setStreetViewControlOptions',
    default: 'default',
    onChange: (val) =>
      widget.setStreetViewControlOptions(STREET_VIEW_OPTIONS[val]),
  });

  return widget;
}
