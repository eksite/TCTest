// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import useLoadData from './hooks/useLoadData';
import moment from 'moment';


const App=()=>{
    const [imagineTime, setImagineTime]=useState([]);
    const data = useLoadData( 'https://raw.githubusercontent.com/denissokolov/tc-internship-task/master/launches.json' );
    const extendedData = data.map(extendData);
    useEffect(() => {
        const timer=setTimeout(() => {
            const newState=extendedData.map(obj => {
                if (obj.notInf) {
                    return { ...obj, countdown: obj.notInf, status: 'TBD' };
                }
                if (obj.extraEventTimeStamp) {
                    return { ...obj, status:defineStatus(obj), countdown: timeFormatter(obj.extraEventTimeStamp - moment().unix())  };
                }
                return { ...obj,status:defineStatus(obj), countdown: timeFormatter(obj.eventTimeStamp - moment().unix())};
            });
            setImagineTime(newState);
        },1000);
        return () => clearTimeout(timer);
    }, [extendedData]);
    return imagineTime;
};

const baseDateFormatter = ( year, month, day, hour, min ) => {
    const launchTime = moment({ y: year, M: month, d: day, h: hour, m: min }).format('d.MM.YYYY Qo , h:mm a');
    const timeStamp = moment({ y: year, M: month, d: day, h: hour, m: min }).format('X');
    return [launchTime, timeStamp];
};

const timeFormatter = (timeStamp) => {
    if (timeStamp<0){
        timeStamp=timeStamp*(-1);
    }
    return `${Math.floor(timeStamp/(60*60*24))}d ${Math.floor(timeStamp/(60*60))%24}h ${Math.floor(timeStamp/(60))%60}m`;
};

const defineStatus = (obj) => {
    if (obj.extraEventTimeStamp){
        return obj.extraEventTimeStamp - moment().unix()<0 ? 'Soon' : 'Planned';
    }
    return obj.eventTimeStamp - moment().unix()<0 ? 'Launched' : 'Planned';
};

const extendData = obj => {
    let timeStamp;
    let launchTime; 
    const { launch: { years, months, date, hours, minutes, quarter } } = obj;
    if (!quarter) {
        return {...obj, notInf: 'TBD', launch: 'In our plan' };
    }
    if (!months)  {
        switch (quarter) {
        case 1:
            [launchTime, timeStamp] = baseDateFormatter( years, 0, 1, 0, 0 );
            break;
        case 2:
            [launchTime, timeStamp] = baseDateFormatter( years, 3, 1, 0, 0 );
            break;
        case 3:
            [launchTime, timeStamp] = baseDateFormatter( years, 6, 1, 0, 0 );
            break;
        case 4:
            [launchTime, timeStamp]= baseDateFormatter( years, 9, 1, 0, 0 );
            break; 
        default: timeStamp = 'WE DON\'T KNOW NOW';
        }
        return { ...obj, extraEventTimeStamp: timeStamp, launch: launchTime};}
    if (!date) {
        [launchTime, timeStamp] = baseDateFormatter( years, months, 1, 0, 0 );
        return { ...obj, extraEventTimeStamp: timeStamp, launch: launchTime };
    }
    [launchTime, timeStamp] = baseDateFormatter( years, months-1, date, hours, minutes );
    return {...obj, eventTimeStamp: timeStamp, launch: launchTime};
};

export default App;