import { IFlight } from './../../types';

export const flightsMock: IFlight[] = [
  {
    flightIdentifier: 'D20190401UA969',
    flightNumber: 'UA 969',
    airport: 'San Francisco',
    expectedTime: '14:50',
    originalTime: '14:50',
    url: '/en/departures/flight/D20190401UA969/',
    score: '70.55272',
  },
  {
    flightIdentifier: 'D20190401UA989',
    flightNumber: 'UA 989',
    airport: 'San Francisco',
    expectedTime: '14:50',
    originalTime: '14:50',
    url: '/en/departures/flight/D20190401UA989/',
    score: '71.53476',
  },
  {
    flightIdentifier: 'D20190401VY8379',
    flightNumber: 'VY 8379',
    airport: 'Santiago Com',
    expectedTime: '15:55',
    originalTime: '15:55',
    url: '/en/departures/flight/D20190401VY8379/',
    score: '62.708916',
  },
  {
    flightIdentifier: 'D20190401KL0701',
    flightNumber: 'KL 701',
    airport: 'Santiago',
    expectedTime: '21:00',
    originalTime: '21:00',
    url: '/en/departures/flight/D20190401KL0701/',
    score: '58.897865',
  },
];
