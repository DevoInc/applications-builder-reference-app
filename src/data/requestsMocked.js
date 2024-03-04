import requests from '@devoinc/applications-builder/data/requests';
import RequestApiMock from '@devoinc/applications-data-library/requests/RequestApiMock';
import dateRange from '@devoinc/applications-builder/utils/dateRange';

const commonData = require('./commonData');
const mapData = require('./mapData');
const mapColor = require('./mapColor');
const mapDataTime = require('./mapDataTime');
const mapPewPew = require('./mapPewPew');
const graphData = require('./graphData');
const bichordData = require('./bichordData');
const funnelData = require('./funnelData');
const heatcalendarData = require('./heatcalendarData');
const sankeyData = require('./sankeyData');
const seriesData = require('./seriesData');

export const addRequests = () => {
  requests.add(
    'commonRequest',
    new RequestApiMock({
      query: `from box.unix
    group every 30m by level
    select count() as count`,
      results: commonData,
      delay: 2000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );
  
  requests.add(
    'mapTime',
    new RequestApiMock({
      query: `from demo.ecommerce.data
    where isnotnull(clientIpAddress)
    where clientIpAddress = 100.17.93.91 or clientIpAddress = 100.2.86.66
    select mmlatitude(clientIpAddress) as _lat
    select mmlongitude(clientIpAddress) as _lon
    select ifthenelse(isnotnull(_lat), _lat, -37.358697) as lat
    select ifthenelse(isnotnull(_lon), _lon, 145.165576) as lon
    group every 30m by str(clientIpAddress)
    every 1h
    select last(lat) as lat
    select last(lon) as lon
    select count() as count`,
      results: mapDataTime,
      delay: 1000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );
  
  requests.add(
    'map',
    new RequestApiMock({
      query: `from demo.ecommerce.data
    where isnotnull(clientIpAddress)
    select mmlatitude(clientIpAddress) as _lat
    select mmlongitude(clientIpAddress) as _lon
    select ifthenelse(isnotnull(_lat), _lat, -37.358697) as lat
    select ifthenelse(isnotnull(_lon), _lon, 145.165576) as lon
    group every 30m by clientIpAddress
    every -
    select last(lat) as lat
    select last(lon) as lon
    select count() as count`,
      results: mapData,
      delay: 1000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );
  
  requests.add(
    'mapColor',
    new RequestApiMock({
      query: `from my.app.demotelco.ratios_tv2
    group every 30m by country every 0
    select count() as count`,
      results: mapColor,
      delay: 1000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );
  
  requests.add(
    'seriesData',
    new RequestApiMock({
      query: `from demo.ecommerce.data
      where isnotnull(clientIpAddress) select eventdate, method, timeTaken`,
      results: seriesData,
      delay: 1000,
      dates: { from: 1557493200000, to: 1557497220000 },
    })
  );
  
  requests.add(
    'graph',
    new RequestApiMock({
      query: `from edr.crowdstrike.cannon
    select lu("waffleiron", "aid_ComputerName", "ComputerName", aid) as computer
    where isnotnull(computer)
    where startswith(computer, "p")
    select ip4(aip) as ip
    select mmlatitude(ip) as lat
    select mmlongitude(ip) as lon
    select mmcoordinates(ip) as coords
    group by computer, event_simpleName
    select count() as count
    select last(lat) as lat
    select last(lon) as lon
    select last(coords) as coords`,
      results: graphData,
      delay: 1000,
      dates: dateRange.fromNow(5, 'minute'),
    })
  );
  
  requests.add(
    'bichord',
    new RequestApiMock({
      query: `from demo.ecommerce.data
    where isnotnull(clientIpAddress) or isnotnull(statusCode)
    select str(clientIpAddress) as ip
    where startswith(ip, "150.46.18.2")
    group by ip, statusCode
    select count() as count`,
      results: bichordData,
      delay: 1000,
      dates: dateRange.fromNow(1, 'hour'),
    })
  );
  
  requests.add(
    'funnel',
    new RequestApiMock({
      query: `from demo.ecommerce.data
    where isnotnull(clientIpAddress) or isnotnull(statusCode)
    where clientIpAddress = 100.17.93.91 or clientIpAddress = 100.2.86.66
    select str(clientIpAddress) as ip
    group by ip
    select count() as count`,
      results: funnelData,
      delay: 1000,
      dates: dateRange.fromNow(1, 'hour'),
    })
  );
  
  requests.add(
    'heatcalendar',
    new RequestApiMock({
      query: `from demo.ecommerce.data
    group every 1d
    select count() as count`,
      results: heatcalendarData,
      delay: 1000,
      dates: dateRange.fromNow(40, 'day'),
    })
  );
  
  requests.add(
    'sankey',
    new RequestApiMock({
      query: `from demo.ecommerce.data
      where isnotnull(clientIpAddress) or isnotnull(statusCode)
      where clientIpAddress = 100.17.93.91 or clientIpAddress = 100.2.86.66
      select str(clientIpAddress) as ip
      group every 30m by ip, method
      every -
      select count() as count`,
      results: sankeyData,
      delay: 1000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );

  requests.add(
    'mapPewPew',
    new RequestApiMock({
      query: `from siem.logtrust.collector.counter
      select ip4("100.17.93.91") as clientIpAddress
      select mm2latitude(clientIpAddress) as from_lat
      select mm2longitude(clientIpAddress) as from_lon
      select mm2latitude(clientIpAddress) + 1 as to_lat
      select mm2longitude(clientIpAddress) + 1 as to_lon
      group every 30m by str(clientIpAddress)
      every 1h
      select last(from_lat) as from_lat
      select last(from_lon) as from_lon
      select last(to_lat) as to_lat
      select last(to_lon) as to_lon
      select count() as count`,
      results: mapPewPew,
      delay: 1000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );
  
}
