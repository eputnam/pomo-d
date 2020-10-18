import React from 'react';
import PropTypes from 'prop-types';
import TimeSetButton from './TimeSetButton';

const propTypes = {
  timeSets: PropTypes.arrayOf(
    PropTypes.exact({
      startTime: PropTypes.number,
    }),
  ).isRequired,
};

const TimeSetList = ({ timeSets }) => {
  return (
    <ul style={{ listStyle: 'none', margin: '10px 0' }}>
      {timeSets.map(timeSet => (
        <li>
          <TimeSetButton startTime={timeSet.startTime} />
        </li>
      ))}
    </ul>
  );
};

TimeSetList.propTypes = propTypes;

export default TimeSetList;
