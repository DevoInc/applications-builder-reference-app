import Tab from '@devoinc/applications-builder/Tab';
import createSection1 from './section1';

export default () => {
  let tab = new Tab('main5');

  tab.addSection(createSection1());

  return tab;
};
