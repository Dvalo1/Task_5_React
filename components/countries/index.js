import React, { useState } from 'react';
import getStatistics from '../../api/index';
import CountriesSelector from '../selector/select';

function Countries(props) {
  const { stats, loading, error } = getStatistics('https://api.covid19api.com/summary');
  const [activeCountry, setActiveCountry] = useState('Georgia');
  if (error) {
    return (
        <div className="extra_display">
            <span>Error</span>
        </div>
    );
  }
  if (loading) {
    return (
        <div className="extra_display">
            <span>Loading...</span>
        </div>
    );
  }
  if (stats) {
    return (
        <div>
        <CountriesSelector setActiveCountry = { setActiveCountry } stats = { stats } />
          {(() => {
            if (setActiveCountry) {
              return (
                <div>
                    {stats.Countries.map(function(country, index) {
                        if (activeCountry == country.Country) {
                            return (
                                <div className="header_main countries" key={country.Country}>
                                    <div className="extra_details">
                                        <div className="info_box">Country: <b>{country.Country}</b></div>
                                        <div className="info_box">Country Code: <b>{country.CountryCode}</b></div>
                                        <div className="info_box">Date: <b>{country.Date}</b></div>
                                    </div>
                                    <div className="info_box total">
                                        <h3>Total Confirmed</h3>{country.TotalConfirmed.toLocaleString()}
                                        <span><h4>New Confirmed</h4>{country.NewConfirmed.toLocaleString()}</span>
                                    </div>

                                    <div className="info_box deaths">
                                        <h3>Total Deaths</h3>{country.TotalDeaths.toLocaleString()}
                                        <span><h4>New Deaths</h4>{country.NewDeaths.toLocaleString()}</span>
                                    </div>

                                    <div className="info_box recoveries">
                                        <h3>Total Recovered</h3>{country.TotalRecovered.toLocaleString()}
                                        <span><h4>New Recovered</h4>{country.NewRecovered.toLocaleString()}</span>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
              )
            } else {
              return (
                <div>Err</div>
              )
            }
          })()}
        </div>
      )
  }
  return (
    <div></div>
  );
  
}

export default Countries;
