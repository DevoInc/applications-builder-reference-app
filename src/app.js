import App from '@devoinc/applications-builder/App';
import bootstrap from '@devoinc/applications-builder/bootstrap';

import dateRange from '@devoinc/applications-builder/utils/dateRange';
import config from './config';

import createTab1 from './view/tab1';
import createTab2 from './view/tab2';
import createTab3 from './view/tab3';
import createTab4 from './view/tab4';
import createTab5 from './view/tab5';
import createTab6 from './view/tab6';
import createTab7 from './view/tab7';
import createTab8 from './view/tab8';
import createTab9 from './view/tab9';
import createTab10 from './view/tab10';

export const defaultDates = dateRange.fromNow(1, 'day', 'minute');

// Languages
// -----------------------------------------------------------------------------

bootstrap.langs({
  en_EN: require('./i18n/en_EN.json'),
  es_ES: require('./i18n/es_ES.json'),
});

// Create App
// -----------------------------------------------------------------------------

let app = new App(config.id);
bootstrap.app(app);

// Create the request for use
// -----------------------------------------------------------------------------
import './data/requests';

// Create Tabs
// -----------------------------------------------------------------------------

app.addTab(createTab1());
app.addTab(createTab2());
app.addTab(createTab3());
app.addTab(createTab4());
app.addTab(createTab5());
app.addTab(createTab6());
app.addTab(createTab7());
app.addTab(createTab8());
app.addTab(createTab9());
app.addTab(createTab10());
// Init application
// -----------------------------------------------------------------------------

app.init();
