import { Chart } from 'react-google-charts';

const Data = [
  ['City', '2010 Population'],
  ['New York City, NY', 8175000],
  ['Los Angeles, CA', 3792000],
  ['Chicago, IL', 2695000],
  ['Houston, TX', 2099000],
  ['Philadelphia, PA', 1526000],
];

export default ({ data }) => {
  const totalPolutionBar = [
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
      .sort((a, b) => b[1] - a[1]),
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

  return (
    <div style={{ width: '90vw' }}>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="500px"
        data={totalPolutionBar || Data}
        options={{
          title: 'Total polution',
          chartArea: { width: '50%' },
          colors: ['darkred'],
          hAxis: {
            title: 'Total Population',
            minValue: 0,
          },
          vAxis: {
            title: 'Polution (thousands of tonnes)',
          },
        }}
      />
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="500px"
        data={difPolutionBar || Data}
        options={{
          title: 'Polution sources',
          chartArea: { width: '50%' },
          isStacked: true,
          hAxis: {
            title: 'Total Population',
            minValue: 0,
          },
          vAxis: {
            title: 'Polution (thousands of tonnes)',
          },
        }}
      />
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="500px"
        data={polutionPerCapita || Data}
        options={{
          title: 'Polution sources',
          chartArea: { width: '50%' },
          isStacked: true,
          hAxis: {
            title: 'Total Population',
            minValue: 0,
          },
          vAxis: {
            title: 'Polution (thousands of tonnes)',
          },
        }}
      />
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="500px"
        data={polutionPerSqKm || Data}
        options={{
          title: 'Polution sources',
          chartArea: { width: '50%' },
          isStacked: true,
          hAxis: {
            title: 'Total Population',
            minValue: 0,
          },
          vAxis: {
            title: 'Polution (thousands of tonnes)',
          },
        }}
      />
    </div>
  );
};
