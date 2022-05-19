import Section from '@devoinc/applications-builder/Section';
import widgets from './widgets/';

export default () => {
  let section = new Section('section103');

  widgets.forEach((widget) => {
    section.addWidget(widget());
  });

  return section;
};
