import React from 'react';
import PropTypes from 'prop-types';
import TimeSetButton from './TimeSetButton';
import { TIME_SET } from '../../state/CommonPropTypes';

const propTypes = {
  timeSets: PropTypes.arrayOf(TIME_SET).isRequired,
};

const TimeSetList = ({ timeSets }) => {
  return (
    <ul style={{ listStyle: 'none', margin: '10px 0' }}>
      {timeSets.map(timeSet => (
        <li style={{ margin: '10px 0' }} key={timeSet.startTime}>
          <TimeSetButton timeSet={timeSet} />
        </li>
      ))}
    </ul>
  );
};

TimeSetList.propTypes = propTypes;

export default TimeSetList;
