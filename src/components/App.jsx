import { useState } from 'react';
import Text from './Text';
import React from 'react';

const App = ()=>{

    let [time, setTime] = useState(0);
    let [isTimerOn, setIsTimerOn] = useState(true);
    let [nIntervalId, setnIntervalId] = useState('');

    function writingStopped(event){
        if(isTimerOn){
            setIsTimerOn(false);
            nIntervalId = setInterval(()=>{
                setTime((prevTime)=>{
                    return prevTime + 1;
                })
            }, 1000)
        }
    }


    return <div>
        <Text time={time} st_func={writingStopped} intervalId={nIntervalId}/>
    </div>
}

export default App;