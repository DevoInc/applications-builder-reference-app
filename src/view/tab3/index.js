import Tab from '@devoinc/applications-builder/Tab';
import createSection1 from './section1';
import createSection2 from './section2';
import createSection3 from './section3';
import createSection4 from './section4';
import createSection5 from './section5';

export default () => {
  let tab = new Tab('main3');

  tab.addSection(createSection1());
  tab.addSection(createSection2());
  tab.addSection(createSection3());
  tab.addSection(createSection4());
  tab.addSection(createSection5());

  return tab;
};
