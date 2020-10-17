import React, { useState } from 'react';
import './Home.scss';
import PageTitle from "../../components/PageTitle";
import {Button, ButtonGroup} from "@chakra-ui/core";
import Timer from "../../components/Timer/Timer";

const Home = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isStopped, setIsStopped] = useState(true);
    const [timerId, setTimerId] = useState(0);

    const playTimer = () => {
        let currentTime = time;
        setIsPaused(false);
        setIsStopped(false);
        setIsRunning(true);
        const id = setInterval(() => setTime(currentTime += 1), 1000);
        console.log("running with id: " + id)
        setTimerId(id);
    }

    const pauseTimer = () => {
      console.log("attempting to clear with id: " + timerId);
      clearInterval(timerId);
      setIsPaused(true);
      setIsRunning(false);
      setIsStopped(false)
    }

    const clearTimer = () => {
      clearInterval(timerId);
      setIsRunning(false);
      setIsStopped(true);
      setTime(0);
    }

    let startButtonText, startButtonColor, onClick, stopButtonText, stopButtonColor;

    startButtonText = "GO";
    startButtonColor = "green";
    stopButtonText = "STOP";
    stopButtonColor = "red";
    onClick = playTimer;

    if(isRunning) {
      startButtonText = "PAUSE";
      startButtonColor = "yellow";
      onClick = pauseTimer;
    } else if(isPaused) {
      startButtonText = "GO";
      startButtonColor = "green";
      onClick = playTimer;
    } else if(isStopped) {
      stopButtonColor = "gray";
    }

    return (
        <div className="route-home">
            <PageTitle title={"pomo-dee"} subtitle={"it's pomo time"}/>
            <div style={{margin: '10px 0'}}>
                <ButtonGroup>
                    <Button style={{ width: '250px'}} variantColor={startButtonColor} onClick={onClick}>{startButtonText}</Button>
                    <Button variantColor={stopButtonColor} isDisabled={isStopped} onClick={clearTimer}>{stopButtonText}</Button>
                </ButtonGroup>
            </div>
            <Timer isRunning={isRunning} currentCount={time}/>
        </div>
    );
}

export default Home;
