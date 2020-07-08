import React from "react";
import getStatistics from '../../api/index';

function Summary(props) {
  const { stats, loading, error } = getStatistics('https://api.covid19api.com/summary');

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
        <div className="title">Global #Covid-19 Statistics</div>
        <div className="header_main summary">
          <div className="info_box total">
            <h3>Total Confirmed</h3>{stats.Global.TotalConfirmed.toLocaleString()}
            <span><h4>New Confirmed</h4>{stats.Global.NewConfirmed.toLocaleString()}</span>
          </div>

          <div className="info_box deaths">
            <h3>Total Deaths</h3>{stats.Global.TotalDeaths.toLocaleString()}
            <span><h4>New Deaths</h4>{stats.Global.NewDeaths.toLocaleString()}</span>
          </div>

          <div className="info_box recoveries">
            <h3>Total Recovered</h3>{stats.Global.TotalRecovered.toLocaleString()}
            <span><h4>New Recovered</h4>{stats.Global.NewRecovered.toLocaleString()}</span>
          </div>

        </div>
      </div>
    );
  }
  return (
    <div></div>
  );
  
}

export default Summary;
