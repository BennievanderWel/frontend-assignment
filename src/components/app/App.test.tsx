import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import * as Header from '../header/Header';
import * as Search from '../search/Search';
import * as Results from '../results/Results';
import { flightsMock } from './App.mocks';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ flights: flightsMock }),
  }),
);

const HeaderMock = jest
  .spyOn(Header, 'default')
  .mockImplementation(() => <div>Header</div>);
const SearchMock = jest
  .spyOn(Search, 'default')
  .mockImplementation(() => <div>Search</div>);
const ResultsMock = jest
  .spyOn(Results, 'default')
  .mockImplementation(() => <div>Results</div>);

describe('App', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should render without crashing', () => {
    render(<App />);
  });

  it('should render Header', () => {
    render(<App />);
    expect(HeaderMock).toHaveBeenCalledTimes(2); // Use effect adds a render
    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  it('should render Search with correct props', () => {
    render(<App />);
    expect(SearchMock).toHaveBeenCalledTimes(2); // Use effect adds a render
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('should render Results with correct props', () => {
    render(<App />);
    expect(ResultsMock).toHaveBeenCalledTimes(2); // Use effect adds a render
    expect(screen.getByText('Results')).toBeInTheDocument();
    expect(ResultsMock).toHaveBeenLastCalledWith(
      {
        searchResults: [],
        isLoading: true,
        isError: false,
      },
      {},
    );
  });

  it.todo('should rerender Results when searhResults is set');
  it.todo('should render Results with isError on fetch error');
});
