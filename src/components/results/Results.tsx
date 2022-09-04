import React from 'react';
import { IFlight } from '../../types';
import Loader from '../loader/Loader';
import './Results.scss';

export interface IResults {
  searchResults: IFlight[];
  isLoading: boolean;
  isError: boolean;
}

const Results = ({ searchResults, isLoading, isError }: IResults) => {
  const tableHeaderMapper = {
    flightIdentifier: 'ID',
    flightNumber: 'Number',
    airport: 'Destination',
    expectedTime: 'Time of arrival',
  };

  const renderRow = (flight: IFlight) => (
    <tr key={flight.flightIdentifier}>
      <td>{flight.flightIdentifier}</td>
      <td>{flight.airport}</td>
      <td>{flight.flightNumber}</td>
      <td>{flight.expectedTime}</td>
    </tr>
  );

  const getContent = () => {
    if (isLoading) return <Loader />;
    if (isError)
      return (
        <span className="results__message">Oops, something went wrong!</span>
      );
    if (!searchResults.length)
      return <span className="results__message">No results</span>;
    return (
      <table className="rw-table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Destination</td>
            <td>Number</td>
            <td>Time of arrival</td>
          </tr>
        </thead>
        <tbody>{searchResults.map(renderRow)}</tbody>
      </table>
    );
  };

  return <div className="results">{getContent()}</div>;
};

export default Results;
