import React from 'react';
import useLoadData from './hooks/useLoadData';
import TimeCounter from './TimeCounter';


const App=()=>{
    const Data=useLoadData('https://raw.githubusercontent.com/denissokolov/tc-internship-task/master/launches.json');
    return <>{Data.map((element,index)=><li key={index}><TimeCounter data={element} /><div>{element.mission}</div></li>)}</>;
};

export default App;