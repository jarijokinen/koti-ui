import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Zone.css';

const displayNames = {
  livingroom: 'Living Room',
  bedroom: 'Bedroom',
  office: 'Office',
  guestroom: 'Guest Room',
  bathroom: 'Bathroom',
  sauna: 'Sauna'
};
const API_URL = 'http://localhost:8086/query?db=koti';

const Zone = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [temperature, setTemperature] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const query = `
      SELECT   celcius
      FROM     temperature
      WHERE    zone='${props.name}'
      ORDER BY time DESC
      LIMIT    1
    `;

    axios.get(API_URL, { params: { q: query } })
      .then(res => {
        setTemperature(res.data.results[0].series[0].values[0][1].toFixed(2));
      })
      .catch(err => setError(err))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="Zone loading">Loading...</div>;
  }
  
  return (
    <div className="Zone">
      <h2 className="Zone-name">{displayNames[props.name] || props.name}</h2>
      <ul>
        <li className="Zone-temperature">
          Temperature: {temperature !== false ? temperature + ' C' : 'N/A'}
        </li>
      </ul>
    </div>
  );
}

Zone.propTypes = {
  name: PropTypes.string.isRequired
};

export default Zone;
