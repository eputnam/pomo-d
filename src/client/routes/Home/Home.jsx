import React, { useState } from 'react';
import './Home.scss';
import PageTitle from "../../components/PageTitle";
import {Button, ButtonGroup} from "@chakra-ui/core";
import Timer from "../../components/Timer/Timer";

const Home = () => {
    const [time, setTime] = useState();
    const runTimer = () => {
        let count = 0;
        setInterval(() => setTime(count += 1), 1000);
    }

    return (
        <div className="route-home">
            <PageTitle title={"pomo-dee"} subtitle={"it's pomo time"}/>
            <div style={{margin: '10px 0'}}>
                <ButtonGroup>
                    <Button variantColor="cyan" onClick={runTimer}>25</Button>
                    <Button variantColor="yellow">Break</Button>
                </ButtonGroup>
            </div>
            <Timer isRunning={false} currentCount={time}/>
        </div>
    );
}

export default Home;
