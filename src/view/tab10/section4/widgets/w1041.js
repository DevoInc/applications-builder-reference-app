import bullet from '@devoinc/applications-builder/widgets/bullet';
import requests from '@devoinc/applications-builder/data/requests';

export default function buildw1041() {
  let widget = bullet('w1041');
  widget.setRequests([requests.get('mapColor')]);

  widget.setValue(['count']);
  widget.setKey('country');

  return widget;
}
