import React, {useRef, useState} from 'react';
import CPPlaceholder from '../assets/CommunityPickPlaceholder.png';
import { SAMPLE_DATA } from './CPData';
// import "./CommunityPicks.css";
import styled from 'styled-components';


const ITEM_WIDTH = 216;


const CPPicks = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();

    //function to handle scroll when button clicked
    const handleScroll = (scrollAmount) =>{
        //calculate new scroll position
        const newScrollPosition = scrollPosition + scrollAmount;
        
        //update new scroll position
        setScrollPosition(newScrollPosition);

        //set scrollLeft
        containerRef.current.scrollLeft = newScrollPosition;
    }



    return(
    <div className="container">
        <div 
            ref={containerRef}
            style={{
                width:"900px",
                overflowX:"scroll",
                scrollBehavior:"smooth",
            }}
        >
            <div className="contentBox">
                {SAMPLE_DATA.map((item) => (
                    <div className="CPcard" style={{backgroundColor: item.color}}>
                        <p>{item.id}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="actionBtns">
            <button onClick={()=>{handleScroll(-ITEM_WIDTH)}}>Scroll Left</button>
            <button onClick={()=>{handleScroll(ITEM_WIDTH)}}>Scroll Right</button>
        </div>
    </div>
    );
}

export default CPPicks;


//styled components
const container=styled.div`
    width: 100vw;
    height:100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const contentBox=styled.div`
    width: 1800px;
    display: flex;
    align-items: center;
    gap:20px;
`;

const CPcard=styled.div`
    width: 216px;
    height: 315px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
    font-weight: 600;
    color: white;
`;

// const CPcard p=styled.div`
//     font-size: 70px;
//     font-weight: 600;
//     color: white;
// `;

const actionBtns=styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    margin-top:50px;
`;

const button=styled.div`
    font-size: 15px;
    font-weight: 500;
    color: navy;
    background-color: lightblue;
    border-radius: 6px;
    padding:10px 25px;
    border: none;
    cursor: pointer;
    transition: all 0.5s ease;
`;

// const actionBtns button:hover=styled.div`
//     color:white;
//     background-color: navy;
// `;

