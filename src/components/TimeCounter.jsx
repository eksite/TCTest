import React from 'react';

const TimeCounter=props=>{
    const data=props.data;
    const time=data.launch.minutes;
    const timeData=new Date().getMinutes()-time;
    return timeData;
};

export default TimeCounter;