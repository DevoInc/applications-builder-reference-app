import sankey from '@devoinc/applications-builder/widgets/sankey';
import dataConversor from '@devoinc/applications-data-library/utils/dataConversor';
import requests from '@devoinc/applications-builder/data/requests';
import Button from '@devoinc/applications-builder/fields/Button';
import CheckBoxField from '@devoinc/applications-builder/fields/CheckBoxField';
import SelectField from '@devoinc/applications-builder/fields/SelectField';
import InputField from '@devoinc/applications-builder/fields/InputField';

export default function buildw931() {
  let widget = sankey('w931');
  widget.setRequests([requests.get('sankey')]);

  widget.setValKey('count');
  widget.setSourceKey('ip');
  widget.setTargetKey('method');

  var button = new Button({
    id: '#w932-button',
    onClick: () => widget.refresh(),
  });

  var setMargin = new CheckBoxField({
    id: '#w932-setMargin',
    onChange: (val) => widget.setMargin(val ? 30 : 0),
  });

  var setNodeWidth = new CheckBoxField({
    id: '#w932-setNodeWidth',
    onChange: (val) => widget.setNodeWidth(val ? '10%' : '5%'),
  });

  var setNodePadding = new CheckBoxField({
    id: '#w932-setNodePadding',
    onChange: (val) => widget.setNodePadding(val ? 6 : 2),
  });

  var setNodeTextBackgroundFilterName = new CheckBoxField({
    id: '#w932-setNodeTextBackgroundFilterName',
    onChange: (val) =>
      widget.setNodeTextBackgroundFilterName(
        val ? 'asdf' : 'washemo-sankey-text-background'
      ),
  });

  var setNodeTextBackgroundFilterRef = new CheckBoxField({
    id: '#w932-setNodeTextBackgroundFilterRef',
    onChange: (val) =>
      widget.setNodeTextBackgroundFilterRef(val ? 'asdf' : null),
  });

  var setGenerateNodeTextBackground = new CheckBoxField({
    id: '#w932-setGenerateNodeTextBackground',
    onChange: (val) => widget.setGenerateNodeTextBackground(val),
  });

  var setLinkColor = new CheckBoxField({
    id: '#w932-setLinkColor',
    onChange: (val) => widget.setLinkColor(val ? 'source' : null),
  });

  var setCycles = new CheckBoxField({
    id: '#w932-setCycles',
    onChange: (val) =>
      widget.setCycles((path) => {
        return val ? 'asdf' : null;
      }),
  });

  var setPercentile = new CheckBoxField({
    id: '#w932-setPercentile',
    onChange: (val) => widget.setPercentile(val ? 90 : 1),
  });

  var setWeightedPercentile = new CheckBoxField({
    id: '#w932-setWeightedPercentile',
    onChange: (val) => widget.setWeightedPercentile(val),
  });

  var setTailName = new CheckBoxField({
    id: '#w932-setTailName',
    onChange: (val) => widget.setTailName(val ? 'Colita' : 'Other'),
  });

  var setBreadths = new CheckBoxField({
    id: '#w932-setBreadths',
    onChange: (val) => widget.setBreadths(val ? () => 'pa alante' : 'forward'),
  });

  var setAlign = new CheckBoxField({
    id: '#w932-setAlign',
    onChange: (val) => widget.setAlign(val),
  });

  var setIterations = new CheckBoxField({
    id: '#w932-setIterations',
    onChange: (val) => widget.setIterations(val ? 15 : 32),
  });

  var setInnerJoinOnInitialValue = new CheckBoxField({
    id: '#w932-setInnerJoinOnInitialValue',
    onChange: (val) => widget.setInnerJoinOnInitialValue(val),
  });

  var setStatsOnInitialValue = new CheckBoxField({
    id: '#w932-setStatsOnInitialValue',
    onChange: (val) => widget.setStatsOnInitialValue(val),
  });

  var setWithNodeLabels = new CheckBoxField({
    id: '#w932-setWithNodeLabels',
    onChange: (val) => widget.setWithNodeLabels(val),
  });

  var setWithLinkLabels = new CheckBoxField({
    id: '#w932-setWithLinkLabels',
    onChange: (val) => widget.setWithLinkLabels(val),
  });

  var setWithNodeNames = new CheckBoxField({
    id: '#w932-setWithNodeNames',
    onChange: (val) => widget.setWithNodeNames(val),
  });

  var setWithInnerJoinToggle = new CheckBoxField({
    id: '#w932-setWithInnerJoinToggle',
    onChange: (val) => widget.setWithInnerJoinToggle(val),
  });

  var setWithStatsToggle = new CheckBoxField({
    id: '#w932-setWithStatsToggle',
    onChange: (val) => widget.setWithStatsToggle(val),
  });

  var setInfoMargin = new CheckBoxField({
    id: '#w932-setInfoMargin',
    onChange: (val) => widget.setInfoMargin(val ? 15 : 10),
  });

  return widget;
}
