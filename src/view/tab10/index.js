import Tab from '@devoinc/applications-builder/Tab';
import createSection1 from './section1';
import createSection2 from './section2';
import createSection3 from './section3';
import createSection4 from './section4';

export default () => {
  let tab = new Tab('main10');

  tab.addSection(createSection1());
  tab.addSection(createSection2());
  tab.addSection(createSection3());
  tab.addSection(createSection4());

  return tab;
};
