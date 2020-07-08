import React from 'react';

const CountriesSelector = ({ stats, setActiveCountry }) => {
  return (
    <div className="countries_select">
        <div className="select">
            <select defaultValue="Georgia"
            onChange={e => {setActiveCountry(e.target.value);}}> 
            {stats.Countries.map((country, index) => {
                return (
                <option key={country.Country} value={country.Country}>{country.Country}
                </option>
                );
            })}
            </select>
        </div>
    </div>
  );
};

export default CountriesSelector;
