import { useEffect, useRef, useState } from 'react';
import { Chart } from 'react-google-charts';
import { saveAs } from 'file-saver';

const Data = [
  {
    id: 'zkvGEWSQ7TNg-YvvukPJp',
    name: 'АРК (без м. Севасто- поль)',
    totalAmount: '155,2',
    stationary: '31.1',
    mobile: '124.1',
    population: '1967.3',
    territory: '26.1',
  },
  {
    id: 'KOEanjqd6RkWlZw_XjyQs',
    name: 'Вінницька',
    totalAmount: '218,1',
    stationary: '130.3',
    mobile: '87.8',
    population: '1660.0',
    territory: '26.5',
  },
  {
    id: '_BBJn66Y5IDKf1O8f39j5',
    name: 'Волинська',
    totalAmount: '63,4',
    stationary: '10.0',
    mobile: '53.4',
    population: '1036.2',
    territory: '20.2',
  },
  {
    id: 'nXliLgD4nADT3Gpt3kOIV',
    name: 'Дніпропетровська',
    totalAmount: '1164,8',
    stationary: '952.3',
    mobile: '212.5',
    population: '3374.2',
    territory: '31.9',
  },
  {
    id: '6GxAyFde9gtctZshQzI48',
    name: 'Донецька',
    totalAmount: '1767,2',
    stationary: '1533.4',
    mobile: '233.8',
    population: '4500.5',
    territory: '26.5',
  },
  {
    id: 'debmJmkYsg6uRSSB4hAy7',
    name: 'Житомирська',
    totalAmount: '80,5',
    stationary: '19.1',
    mobile: '61.4',
    population: '1294.2',
    territory: '29.9',
  },
  {
    id: 'KMgtT0CrjPILuBOCvuhgt',
    name: 'Закарпатська',
    totalAmount: '91,4',
    stationary: '23.2',
    mobile: '68.2',
    population: '1243.4',
    territory: '12.8',
  },
  {
    id: 'IJK1rZGW1tPLS8xWKdtGj',
    name: ' Івано-Франківська',
    totalAmount: '298,3',
    stationary: '241.7',
    mobile: '56.6',
    population: '1381.1',
    territory: '13.9',
  },
  {
    id: 'lNsv1bzfFWyispLbJ4lKK',
    name: 'Київська (без м. Київ)',
    totalAmount: '289,9',
    stationary: '107.4',
    mobile: '182.5',
    population: '1727.8',
    territory: '28.1',
  },
  {
    id: 'T_XIq2Z8PMdlPw_Kploxr',
    name: 'Кіровоградська',
    totalAmount: '75,1',
    stationary: '14.2',
    mobile: '60.9',
    population: '1027.0',
    territory: '24.6',
  },
];

export default ({ data }) => {
  // data formatting

  const stationaryPolutionBar = [
    ['Region', 'By stationary '],
    ...[...data]
      .map(region => [region.name, +region.stationary.replace(',', '.')])
      .sort((a, b) => b[1] - a[1]),
  ];
  const mobilePolutionBar = [
    ['Region', 'By mobile '],
    ...[...data]
      .map(region => [region.name, +region.mobile.replace(',', '.')])
      .sort((a, b) => b[1] - a[1]),
  ];
  const difPolutionBar = [
    ['Region', 'By stationary', 'By mobile'],
    ...[...data]
      .map(region => [
        region.name,
        +region.stationary.replace(',', '.'),
        +region.mobile.replace(',', '.'),
      ])
      .sort((a, b) => b[1] + b[2] - (a[1] + a[2])),
  ];
  const polutionPerCapita = [
    ['Region', 'Kg per citizen per year'],
    ...[...data]
      .map(region => [
        region.name,
        (+region.totalAmount.replace(',', '.') * 1000) /
          +region.population.replace(',', '.'),
      ])
      .sort((a, b) => b[1] - a[1]),
  ];
  const polutionPerSqKm = [
    ['Region', 'Kg per km²'],
    ...[...data]
      .map(region => [
        region.name,
        (+region.totalAmount.replace(',', '.') * 1000) /
          +region.territory.replace(',', '.'),
      ])
      .sort((a, b) => b[1] - a[1]),
  ];
  // =====

  // download logic

  const [mobileChartWrapper, setMobileChartWrapper] = useState({
    ready: false,
    chart: null,
  });

  const [stationaryChartWrapper, setStationaryChartWrapper] = useState({
    ready: false,
    chart: null,
  });

  const [totalChartWrapper, setTotalChartWrapper] = useState({
    ready: false,
    chart: null,
  });

  const [perCapitaChartWrapper, setPerCapitaChartWrapper] = useState({
    ready: false,
    chart: null,
  });

  const [perSqKmChartWrapper, setPerSqKmChartWrapper] = useState({
    ready: false,
    chart: null,
  });

  const print = chartWrapper => {
    if (chartWrapper.ready) {
      console.log(chartWrapper.chart);
      const image = chartWrapper.chart.getChart().getImageURI();
      console.log(image);
      return image;
    }
  };

  const downloadImage = chart => {
    const link = print(chart);
    saveAs(link, 'polution.jpg'); // Put your image url here.
  };
  // ======

  return (
    <div style={{ width: '90vw' }}>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="500px"
        data={difPolutionBar || Data}
        getChartWrapper={chartWrapper => {
          setTotalChartWrapper({ ready: true, chart: chartWrapper });
        }}
        options={{
          title:
            'Обсяги викидів шкідливих речовин в атмосферне повітря за областями і містами України ',
          chartArea: { width: '50%' },
          isStacked: true,
          hAxis: {
            minValue: 0,
          },
          vAxis: {
            title: 'Обсяг викидів тис. тонн',
          },
        }}
      />
      <button onClick={() => downloadImage(totalChartWrapper)}>download</button>
      <div>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="500px"
          data={stationaryPolutionBar || Data}
          getChartWrapper={chartWrapper => {
            setStationaryChartWrapper({ ready: true, chart: chartWrapper });
          }}
          options={{
            title:
              'Обсяги викидів шкідливих речовин в атмосферне повітря від стаціонарних джерел за областями і містами України ',
            chartArea: { width: '50%' },
            colors: ['darkred'],
            hAxis: {
              minValue: 0,
            },
            vAxis: {
              title: 'Обсяг викидів тис. тонн',
            },
          }}
        />
        <button onClick={() => downloadImage(stationaryChartWrapper)}>
          download
        </button>
      </div>
      <div>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="500px"
          data={mobilePolutionBar || Data}
          getChartWrapper={chartWrapper => {
            setMobileChartWrapper({ ready: true, chart: chartWrapper });
          }}
          options={{
            title:
              'Обсяги викидів шкідливих речовин в атмосферне повітря від пересувних джерел за областями і містами України ',
            chartArea: { width: '50%' },
            colors: ['darkorange'],
            hAxis: {
              minValue: 0,
            },
            vAxis: {
              title: 'Обсяг викидів тис. тонн',
            },
          }}
        />
        <button onClick={() => downloadImage(mobileChartWrapper)}>
          download
        </button>
      </div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="500px"
        data={polutionPerCapita || Data}
        getChartWrapper={chartWrapper => {
          setPerCapitaChartWrapper({ ready: true, chart: chartWrapper });
        }}
        options={{
          title:
            'Обсяги викидів шкідливих речовин в атмосферне повітря на душу населення за областями і містами України ',
          chartArea: { width: '50%' },
          isStacked: true,
          hAxis: {
            minValue: 0,
          },
          vAxis: {
            title: 'Обсяг викидів тонн на особу',
          },
        }}
      />
      <button onClick={() => downloadImage(perCapitaChartWrapper)}>
        download
      </button>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="500px"
        data={polutionPerSqKm || Data}
        getChartWrapper={chartWrapper => {
          setPerSqKmChartWrapper({ ready: true, chart: chartWrapper });
        }}
        options={{
          title:
            'Обсяги викидів шкідливих речовин в атмосферне повітря на km² за областями і містами України ',
          chartArea: { width: '50%' },
          isStacked: true,
          hAxis: {
            minValue: 0,
          },
          vAxis: {
            title: 'Обсяг викидів т/км²',
          },
        }}
      />
      <button onClick={() => downloadImage(perSqKmChartWrapper)}>
        download
      </button>
    </div>
  );
};
