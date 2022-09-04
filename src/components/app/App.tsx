import React, { useState, useEffect } from 'react';
import Search from '../search/Search';
import Results from '../results/Results';
import Header from '../header/Header';
import { IFlight } from '../../types';
import '../../scss/index.scss';
import './App.scss';

const App = () => {
  const [searchResults, setSearchResults] = useState<IFlight[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchFailed, setIsFetchFailed] = useState(false);

  useEffect(() => {
    getFlights('');
  }, []);

  const getFlights = async (searchTerm: string) => {
    setIsLoading(true);

    // Simulate API response delay
    const delay = Math.floor(Math.random() * (500 - 200 + 1) + 200);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Cast API responsetype due to no typing on API
    let flights: IFlight[];
    try {
      const response = await fetch('flights.json');
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      flights = data.flights;
    } catch (e) {
      setIsLoading(false);
      setIsFetchFailed(true);
      return;
    }

    // Filter flights based on searchTerm
    const filteredFlightData = flights.filter((flight) =>
      flight.airport.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setIsLoading(false);
    setSearchResults(filteredFlightData);
  };

  return (
    <div className="app">
      <Header />
      <Search onSubmit={getFlights} />
      <Results
        searchResults={searchResults}
        isLoading={isLoading}
        isError={isFetchFailed}
      />
    </div>
  );
};

export default App;
