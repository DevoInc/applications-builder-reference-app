import requests from '@devoinc/applications-builder/data/requests';
import empty from '@devoinc/applications-builder/widgets/empty';

export default function buildGenerator(id, sizeL, sizeM, sizeS) {
  return function () {
    let widget = empty(id);
    widget.setRequests([requests.get('commonRequest')]);
    widget.render = () => {
      $(`#${id} .lt-vapp-widget-graphic`).html(`<ul>
        <li>lg-${sizeL}</li>
        <li>md-${sizeM}</li>
        <li>sm-${sizeS}</li>
        </ul>`);
    };

    return widget;
  };
}
