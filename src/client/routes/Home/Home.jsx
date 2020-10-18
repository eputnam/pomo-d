import React from 'react';
import './Home.scss';
import PageTitle from '../../components/PageTitle';
import Timer from '../../components/Timer/Timer';
import TimeSetList from '../../components/TimeSet/TimeSetList';

const Home = () => {
  const defaultTimeSet = {
    startTime: 25 * 60,
  };

  return (
    <div className="route-home">
      <PageTitle title="pomo-dee" subtitle={"it's pomo time"} />
      <TimeSetList timeSets={[defaultTimeSet]} />
      <Timer />
    </div>
  );
};

export default Home;
