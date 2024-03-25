import React, {useRef, useState} from 'react';
import { SAMPLE_DATA } from './CPData';
import "./CommunityPicks.css";


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
        <div 
            ref={containerRef}
            style={{
                // width:"900px",
                width: "1150px", 
                overflowX:"scroll",
                scrollBehavior:"smooth",
            }}
        >
            <div className="content-box">
                {SAMPLE_DATA.map((item) => (
                    <div className="CPcard" style={{backgroundColor: item.color}}>
                        <p>{item.id}</p>
                    </div>
                ))}
            </div>
        

        <div className="action-btns">
            <button onClick={()=>{handleScroll(-ITEM_WIDTH)}}>Scroll Left</button>
            <button onClick={()=>{handleScroll(ITEM_WIDTH)}}>Scroll Right</button>
        </div>
    </div>
    );
}

export default CPPicks;


