import dataTables from '@devoinc/applications-builder/widgets/dataTables';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw411() {
  let widget = dataTables('w411');
  widget.setRequests([requests.get('commonRequest')]);

  var button = new Button({
    id: '#w412-button',
    onClick: () => widget.refresh(),
  });

  var setLimit = new InputField({
    id: '#w412-setLimit',
    default: '0',
    onChange: (val) => widget.setLimit(Number(val)),
  });

  var setOrder = new SelectField({
    id: '#w412-setOrder',
    onChange: (val) => widget.setOrder(JSON.parse(val)),
    default: '[0, "asc"]',
  });

  var setLabels = new CheckBoxField({
    id: '#w412-setLabels',
    onChange: (val) =>
      widget.setLabels(val ? ['label1', 'label2', 'label3', 'label4'] : null),
  });

  var setRowClick = new CheckBoxField({
    id: '#w412-setRowClick',
    onChange: (val) => {
      widget.setRowClick(
        val
          ? (event) => {
              event.target.style.color = '#880000';
            }
          : () => {}
      );
    },
  });

  var setDrawCallback = new CheckBoxField({
    id: '#w412-setDrawCallback',
    onChange: (val) =>
      widget.setDrawCallback(
        val
          ? (config) => {
              var result = $(
                `<div>I'm a callback! ${config.aoData.length}</div>`
              );
              $('#w411 .lt-vapp-widget-graphic').append(result);
            }
          : () => {}
      ),
  });

  var setDom = new CheckBoxField({
    id: '#w412-setDom',
    onChange: (val) => widget.setDom(val ? 'lrfti' : 'lrftip'),
  });

  var setColumnsOrder = new CheckBoxField({
    id: '#w412-setColumnsOrder',
    onChange: (val) =>
      widget.setColumnsOrder(val ? [0, 2, 1, 3] : [0, 1, 2, 3]),
  });

  var setLanguage = new CheckBoxField({
    id: '#w412-setLanguage',
    onChange: (val) =>
      widget.setLanguage(
        val
          ? {
              info: 'Showing just _START_ to _END_ of the huge and unbelievable amount of _TOTAL_ entries',
              paginate: {
                first: 'Primeiro',
                last: 'Secundeiro',
                next: 'Gimme more!',
                previous: 'Gimme less!',
              },
            }
          : {}
      ),
  });

  var setScrollY = new InputField({
    id: '#w412-setScrollY',
    default: '0',
    onChange: (val) => widget.setScrollY(Number(val)),
  });

  var setScrollX = new CheckBoxField({
    id: '#w412-setScrollX',
    onChange: (val) => widget.setScrollX(val),
  });

  var setScrollCollapse = new CheckBoxField({
    id: '#w412-setScrollCollapse',
    onChange: (val) => widget.setScrollCollapse(val),
  });

  var setLengthChange = new CheckBoxField({
    id: '#w412-setLengthChange',
    onChange: (val) => widget.setLengthChange(val),
  });

  var setPageLength = new InputField({
    id: '#w412-setPageLength',
    default: '10',
    onChange: (val) => widget.setPageLength(Number(val)),
  });

  var setCreatedRow = new CheckBoxField({
    id: '#w412-setCreatedRow',
    onChange: (val) =>
      widget.setCreatedRow(
        val
          ? (rowElement, rowData, rowIdx) => {
              var tmp = rowElement.innerHTML;
              rowElement.innerHTML = `<td>${rowIdx}</td>` + tmp;
              setTimeout(() => {
                rowElement.innerHTML = tmp;
              }, 2000);
            }
          : () => {}
      ),
  });

  var setFilter = new CheckBoxField({
    id: '#w412-setFilter',
    onChange: (val) => widget.setFilter(val),
  });

  var setPaging = new CheckBoxField({
    id: '#w412-setPaging',
    onChange: (val) => widget.setPaging(val),
  });

  var setFooterInfo = new CheckBoxField({
    id: '#w412-setFooterInfo',
    onChange: (val) => widget.setFooterInfo(val),
  });

  var setCustomClass = new InputField({
    id: '#w412-setCustomClass',
    onChange: (val) => widget.setCustomClass([val]),
  });

  var setColumnRenderers = new CheckBoxField({
    id: '#w412-setColumnRenderers',
    onChange: (val) =>
      val
        ? widget.setColumnRenderers(
            [0],
            (data, type, rowData) => new Date(data)
          )
        : null,
  });

  var setToolTipColumns = new CheckBoxField({
    id: '#w412-setToolTipColumns',
    onChange: (val) => (val ? widget.setToolTipColumns([1]) : null),
  });

  var setNoWrapColumns = new CheckBoxField({
    id: '#w412-setNoWrapColumns',
    onChange: (val) => (val ? widget.setNoWrapColumns([2]) : null),
  });

  var setArrayColumns = new CheckBoxField({
    id: '#w412-setArrayColumns',
    onChange: (val) => (val ? widget.setArrayColumns([3]) : null),
  });

  var setPagingType = new SelectField({
    id: '#w412-setPagingType',
    default: 'simple_numbers',
    onChange: (val) => widget.setPagingType(val),
  });

  var setPagingInfo = new CheckBoxField({
    id: '#w412-setPagingInfo',
    onChange: (val) => widget.setPagingInfo(val),
  });

  return widget;
}
