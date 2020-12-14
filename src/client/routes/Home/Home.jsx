import React, { useState } from 'react';
import './Home.scss';
import PageTitle from '../../components/PageTitle';
import Timer from '../../components/Timer/Timer';
import TimeSetList from '../../components/TimeSet/TimeSetList';

const Home = () => {
  const defaultTimeSet = {
    startTime: 25 * 60,
  };

  const thirty = {
    startTime: 30 * 60,
  };

  const five = {
    startTime: 5 * 60,
  };

  const [currentTimeSet, setCurrentTimeSet] = useState(defaultTimeSet);

  return (
    <div className="route-home">
      <PageTitle title="pomo-dee" subtitle={"it's pomo time"} />
      <TimeSetList
        timeSets={[defaultTimeSet, thirty, five]}
        onClickTimeSetButton={setCurrentTimeSet}
      />
      <Timer timeSet={currentTimeSet} />
    </div>
  );
};

export default Home;
