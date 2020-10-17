import React from 'react';
import './Home.scss';
import PageTitle from '../../components/PageTitle';
import Timer from '../../components/Timer/Timer';

const Home = () => {
  return (
    <div className="route-home">
      <PageTitle title="pomo-dee" subtitle={"it's pomo time"} />
      <Timer />
    </div>
  );
};

export default Home;
