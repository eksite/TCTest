import React from 'react';
import Header from './Header';
import App from './App';
import Styled from 'styled-components';

const GridChild=Styled.div`
height: 76px;
line-height:76px;
color: #14181E;
background-color: ${props => props.isColor ? 'rgba(18, 24, 57, 0.04)' : '#FFFFFF'};
text-align:${props => props.isFirst ? 'center' : ''};
`;

const GridWrapper=Styled.div`
    margin: auto;
    display: grid;
    width: 100%;
    // margin-left:110px;
    grid-template-columns: 0.7fr 1.2fr 1fr 1fr 1fr 1fr 1fr;
`;
const Paragraph=Styled.p`
    margin: 0 0 10px 0;
    color: #14181E;
    width: 100%;
    height: 22px;
    font-size:18px;
    padding-top:22px;
    padding-bottom: 18px;
    background-color: rgba(18, 24, 57, 0.04);
    &:nth-child(1){
        text-align:center;
    }
`;


const Ui= () => {
    const data = App();
    return (
        <>
            <Header />
            <GridWrapper>
                <Paragraph>№</Paragraph>
                <Paragraph>Mission</Paragraph>
                <Paragraph>Vehicle</Paragraph>
                <Paragraph>Location</Paragraph>
                <Paragraph>Launch</Paragraph>
                <Paragraph>Status</Paragraph>
                <Paragraph>Time left/after</Paragraph>
                {data.map((element,index) =>
                    <>   
                        <GridChild isColor={index%2} isFirst={true}>{index+1}</GridChild>
                        <GridChild isColor={index%2}>{element.mission}</GridChild>
                        <GridChild isColor={index%2}>{element.vehicle}</GridChild>
                        <GridChild isColor={index%2}>{element.location}</GridChild>
                        <GridChild isColor={index%2}>{element.launch}</GridChild>
                        <GridChild isColor={index%2}>{element.status}</GridChild>
                        <GridChild isColor={index%2}>{element.countdown}</GridChild>
                    </>
                )}
            </GridWrapper>
        </>
    );
};
export default Ui;