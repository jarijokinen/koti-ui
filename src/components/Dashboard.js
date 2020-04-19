import React from 'react';
import PropTypes from 'prop-types';
import Zone from './Zone';

const Dashboard = (props) => {
  const zones = [];
  props.zones.map((zone) => zones.push(<Zone key={zone} name={zone} />));

  return <div className="zones">{zones}</div>;
}

Dashboard.propTypes = {
  zones: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Dashboard;
