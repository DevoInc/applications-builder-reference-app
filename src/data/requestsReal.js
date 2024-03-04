import requests from '@devoinc/applications-builder/data/requests';
import RequestApi from '@devoinc/applications-data-library/requests/RequestApi';
import dateRange from '@devoinc/applications-builder/utils/dateRange';

export const addRequests = () => {
  requests.add(
    'commonRequest',
    new RequestApi({
      query: `from siem.logtrust.collector.counter
      select collector
    group every 30m by collector
    select count() as count`,
      delay: 2000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );
  
  requests.add(
    'mapTime',
    new RequestApi({
      query: `from siem.logtrust.collector.counter
      select ip4("100.17.93.91") as clientIpAddress
      select mm2latitude(clientIpAddress) as lat
      select mm2longitude(clientIpAddress) as lon
      group every 30m by str(clientIpAddress)
      every 1h
      select last(lat) as lat
      select last(lon) as lon
      select count() as count`,
      delay: 1000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );
  
  requests.add(
    'map',
    new RequestApi({
      query: `from siem.logtrust.collector.counter
      select ip4("100.17.93.91") as clientIpAddress
      select mm2latitude(clientIpAddress) as lat
      select mm2longitude(clientIpAddress) as lon
      group every 30m by str(clientIpAddress)
      every -
      select last(lat) as lat
      select last(lon) as lon
      select count() as count`,
      delay: 1000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );
  
  requests.add(
    'mapColor',
    new RequestApi({
      query: `from siem.logtrust.collector.counter
      select "BR" as country
      group every 30m by country every 0
      select count() as count`,
      delay: 1000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );
  
  requests.add(
    'seriesData',
    new RequestApi({
      query: `from siem.logtrust.collector.counter
      select eventdate, collector as method, bytes as timeTaken`,
      delay: 1000,
      dates: dateRange.fromNow(1, 'hour'),
    })
  );
  
  requests.add(
    'graph',
    new RequestApi({
      query: `from siem.logtrust.web.activity 
      select replaceall(srcHost, "[", "") as hostTmp,
      replaceall(hostTmp, "]", "") as host,
      ip6(host) as ip, mm2latitude(ip) as lat,
      mm2longitude(ip) as lon,
      mm2coordinates(ip) as coords,
      serverHost as computer,
      method as event_simpleName
      group by computer, event_simpleName
      select count() as count,
      last(lat) as lat,
      last(lon) as lon,
      last(coords) as coords`,
      delay: 1000,
      dates: dateRange.fromNow(1, 'hour'),
    })
  );
  
  requests.add(
    'bichord',
    new RequestApi({
      query: `from siem.logtrust.web.activity 
      select replaceall(srcHost, "[", "") as hostTmp,
      replaceall(hostTmp, "]", "") as host,
      ip6(host) as ip group by ip 
      select count() as count`,
      delay: 1000,
      dates: dateRange.fromNow(1, 'hour'),
    })
  );
  
  requests.add(
    'funnel',
    new RequestApi({
      query: `from siem.logtrust.web.activity 
      select replaceall(srcHost, "[", "") as hostTmp,
      replaceall(hostTmp, "]", "") as host,
      ip6(host) as ip group by ip 
      select count() as count`,
      delay: 1000,
      dates: dateRange.fromNow(1, 'hour'),
    })
  );
  
  requests.add(
    'heatcalendar',
    new RequestApi({
      query: `from siem.logtrust.collector.counter
    group every 1d
    select count() as count`,
      delay: 1000,
      dates: dateRange.fromNow(4, 'day'),
    })
  );
  
  requests.add(
    'sankey',
    new RequestApi({
      query: `from siem.logtrust.web.activity 
      select replaceall(srcHost, "[", "") as hostTmp,
      replaceall(hostTmp, "]", "") as host,
      ip6(host) as ip group by ip, method 
      select count() as count`,
      delay: 1000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );

  requests.add(
    'mapPewPew',
    new RequestApi({
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
      delay: 1000,
      dates: dateRange.fromNow(1, 'day'),
    })
  );
  
}
