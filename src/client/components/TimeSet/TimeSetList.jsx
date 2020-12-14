import React from 'react';
import PropTypes from 'prop-types';
import TimeSetButton from './TimeSetButton';
import { TIME_SET } from '../../state/CommonPropTypes';

const propTypes = {
  timeSets: PropTypes.arrayOf(TIME_SET).isRequired,
  onClickTimeSetButton: PropTypes.func.isRequired,
};

const TimeSetList = ({ timeSets, onClickTimeSetButton }) => {
  return (
    <ul style={{ listStyle: 'none', margin: '10px 0' }}>
      {timeSets.map(timeSet => (
        <li style={{ margin: '10px 0' }} key={timeSet.startTime}>
          <TimeSetButton timeSet={timeSet} onClick={onClickTimeSetButton} />
        </li>
      ))}
    </ul>
  );
};

TimeSetList.propTypes = propTypes;

export default TimeSetList;
