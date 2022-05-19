import voronoi from '@devoinc/applications-builder/widgets/voronoi';
import dataConversor from '@devoinc/applications-data-library/utils/dataConversor';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw1031() {
  let widget = voronoi('w1031');
  widget.setRequests([requests.get('graph')]);

  widget.setValue(['count']);
  widget.setKeys(['computer', 'event_simpleName']);
  widget.setLegendVal(false);
  widget.setLegendPercentage(false);

  var button = new Button({
    id: '#w1032-button',
    onClick: () => widget.refresh(),
  });

  var setLayout = new SelectField({
    id: '#w1032-setLayout',
    default: 'relaxed',
    onChange: (val) => widget.setLayout(val),
  });

  var setRelaxationInitializer = new SelectField({
    id: '#w1032-setRelaxationInitializer',
    default: 'fisheye',
    onChange: (val) => widget.setLayout(val),
  });

  var setLegendVal = new CheckBoxField({
    id: '#w1032-setLegendVal',
    default: false,
    onChange: (val) => widget.setLegendVal(val),
  });

  var setLegendPercentage = new CheckBoxField({
    id: '#w1032-setLegendPercentage',
    default: false,
    onChange: (val) => widget.setLegendPercentage(val),
  });

  var setAnnimation = new CheckBoxField({
    id: '#w1032-setAnnimation',
    default: true,
    onChange: (val) => widget.setAnnimation(val),
  });

  var setAttributionLogo = new CheckBoxField({
    id: '#w1032-setAttributionLogo',
    onChange: (val) =>
      widget.setAttributionLogo(
        val ? '/static/img/logos/devo_icon_color.svg' : null
      ),
  });

  var setShowZero = new CheckBoxField({
    id: '#w1032-setShowZero',
    onChange: (val) => widget.setShowZero(val),
  });

  var setOperation = new SelectField({
    id: '#w1032-setOperation',
    default: 'none',
    onChange: (val) => widget.setOperation(val),
  });

  var setValueFormat = new SelectField({
    id: '#w1032-setValueFormat',
    default: 'false',
    onChange: (val) => widget.setValueFormat(JSON.parse(val)),
  });

  var setScrollZoom = new CheckBoxField({
    id: '#w1032-setScrollZoom',
    onChange: (val) => widget.setScrollZoom(val),
  });

  var setMaxLevelItems = new CheckBoxField({
    id: '#w1032-setMaxLevelItems',
    onChange: (val) => widget.setMaxLevelItems(val ? 10 : 1000),
  });

  var setMaxItems = new CheckBoxField({
    id: '#w1032-setMaxItems',
    onChange: (val) => widget.setMaxItems(val ? 10 : 1000),
  });

  var setColorScaleRelativeTo = new SelectField({
    id: '#w1032-setColorScaleRelativeTo',
    default: 'all',
    onChange: (val) => widget.setColorScaleRelativeTo(val),
  });

  var setColorScale = new SelectField({
    id: '#w1032-setColorScale',
    default: 'Default',
    onChange: (val) => widget.setColorScale(val),
  });

  var setExposeCurrentNode = new CheckBoxField({
    id: '#w1032-setExposeCurrentNode',
    onChange: (val) => widget.setExposeCurrentNode(val),
  });

  var setDataLabels = new CheckBoxField({
    id: '#w1032-setDataLabels',
    onChange: (val) => widget.setDataLabels(val ? ['LABEL'] : ['count']),
  });

  var setKeysOrder = new CheckBoxField({
    id: '#w1032-setKeysOrder',
    onChange: (val) =>
      widget.setKeysOrder(
        val
          ? ['event_simpleName', 'computer']
          : ['computer', 'event_simpleName']
      ),
  });

  var setFlatSignals = new CheckBoxField({
    id: '#w1032-setFlatSignals',
    onChange: (val) => widget.setFlatSignals(val),
  });

  var setEnableDetailView = new CheckBoxField({
    id: '#w1032-setEnableDetailView',
    onChange: (val) => widget.setEnableDetailView(val),
  });

  var setEnableColorScale = new CheckBoxField({
    id: '#w1032-setEnableColorScale',
    onChange: (val) => widget.setEnableColorScale(val),
  });

  var setEnableSizeSelect = new CheckBoxField({
    id: '#w1032-setEnableSizeSelect',
    onChange: (val) => widget.setEnableSizeSelect(val),
  });

  var setEnablePartitioning = new CheckBoxField({
    id: '#w1032-setEnablePartitioning',
    onChange: (val) => widget.setEnablePartitioning(val),
  });

  var setPartitioningBorder = new CheckBoxField({
    id: '#w1032-setPartitioningBorder',
    onChange: (val) => widget.setPartitioningBorder(val ? 6 : 2),
  });

  var setDarkenFlatParents = new CheckBoxField({
    id: '#w1032-setDarkenFlatParents',
    onChange: (val) => widget.setDarkenFlatParents(val),
  });

  var setDarkenFlatParentsColor = new CheckBoxField({
    id: '#w1032-setDarkenFlatParentsColor',
    onChange: (val) =>
      widget.setDarkenFlatParentsColor(
        val ? ['#959595', '#808080'] : ['#595959', '#080808']
      ),
  });

  var setDarkenFlatParentsHoveredColor = new CheckBoxField({
    id: '#w1032-setDarkenFlatParentsHoveredColor',
    onChange: (val) =>
      widget.setDarkenFlatParentsHoveredColor(val ? '#987677' : '#797878'),
  });

  var setColorSelection = new CheckBoxField({
    id: '#w1032-setColorSelection',
    onChange: (val) => widget.setColorSelection(val ? 1 : 0),
  });

  var setSizeSelection = new CheckBoxField({
    id: '#w1032-setSizeSelection',
    onChange: (val) => widget.setSizeSelection(val ? 1 : 0),
  });

  return widget;
}
