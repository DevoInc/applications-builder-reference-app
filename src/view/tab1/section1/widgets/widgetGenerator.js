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
    const infoContent = `
    <ul class="list">
      <li class="list__item">Item 1</li>
      <li class="list__item">Item 2</li>
    </ul>`;
    widget.setInfo({title:"This is the info title", content: infoContent});
    widget.setInfoQuery({ title: 'This is the query title', query: `from my.table where this=that and
     that = this`});
    return widget;
  };
}
