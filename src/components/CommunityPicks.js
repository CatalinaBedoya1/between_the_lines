import React, { useRef, useState } from 'react';
import newRightArrow from "../assets/RightArrow.png";
import newLeftArrow from "../assets/LeftArrow.png";
import seeMore from "../assets/seemorebtn.png";
import styled from 'styled-components';

const NEW_ITEM_WIDTH = 200;

const NewCPPicks = () => {
    const [newScrollPosition, setNewScrollPosition] = useState(0);
    const newContainerRef = useRef();

    const CP_SCIFI = [
        { id: "01", color: "#D3D3D3" },
        { id: "02", color: "#D3D3D3" },
        { id: "03", color: "#D3D3D3" },
        { id: "04", color: "#D3D3D3" },
        { id: "05", color: "#D3D3D3" },
        { id: "06", color: "#D3D3D3" },
        { id: "07", color: "#D3D3D3" },
        { id: "08", color: "#D3D3D3" },
        { id: "09", color: "#D3D3D3" },
        { id: "10", color: "#D3D3D3" },
    ];

    const CP_FANTASY = [
        { id: "01", color: "#D3D3D3" },
        { id: "02", color: "#D3D3D3" },
        { id: "03", color: "#D3D3D3" },
        { id: "04", color: "#D3D3D3" },
        { id: "05", color: "#D3D3D3" },
        { id: "06", color: "#D3D3D3" },
        { id: "07", color: "#D3D3D3" },
        { id: "08", color: "#D3D3D3" },
        { id: "09", color: "#D3D3D3" },
        { id: "10", color: "#D3D3D3" },
    ];

    const CP_ROMANCE = [
        { id: "01", color: "#D3D3D3" },
        { id: "02", color: "#D3D3D3" },
        { id: "03", color: "#D3D3D3" },
        { id: "04", color: "#D3D3D3" },
        { id: "05", color: "#D3D3D3" },
        { id: "06", color: "#D3D3D3" },
        { id: "07", color: "#D3D3D3" },
        { id: "08", color: "#D3D3D3" },
        { id: "09", color: "#D3D3D3" },
        { id: "10", color: "#D3D3D3" },
    ];

    const CP_TRUECRIME = [
        { id: "01", color: "#D3D3D3" },
        { id: "02", color: "#D3D3D3" },
        { id: "03", color: "#D3D3D3" },
        { id: "04", color: "#D3D3D3" },
        { id: "05", color: "#D3D3D3" },
        { id: "06", color: "#D3D3D3" },
        { id: "07", color: "#D3D3D3" },
        { id: "08", color: "#D3D3D3" },
        { id: "09", color: "#D3D3D3" },
        { id: "10", color: "#D3D3D3" },
    ];

    // Scroll when button clicked
    const handleNewScroll = (scrollAmount) => {
        // Calculate new scroll position
        const newNewScrollPosition = newScrollPosition + scrollAmount;

        // Update new scroll position
        setNewScrollPosition(newNewScrollPosition);

        // Set scrollLeft
        newContainerRef.current.scrollLeft = newNewScrollPosition;
    };

    return (
        <NewContainer>
            <NewQuizResult>
                <p>Top community picks for Sci-Fi ...</p>
            </NewQuizResult>

            <div
                ref={newContainerRef}
                style={{
                    width: "1150px",
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                }}
            >
                <NewContentBox>
                    {CP_SCIFI.map((item) => (
                        <NewCPcard key={item.id} color={item.color}>
                            <NewCardText>{item.id}</NewCardText>
                        </NewCPcard>
                    ))}
                </NewContentBox>
            </div>

            <NewActionButtons>
                <NewButton
                    style={{ backgroundImage: `url(${newLeftArrow})` }}
                    onClick={() => { handleNewScroll(-NEW_ITEM_WIDTH) }}
                />
                <NewButton
                    style={{ backgroundImage: `url(${newRightArrow})` }}
                    onClick={() => { handleNewScroll(NEW_ITEM_WIDTH) }}
                />
            </NewActionButtons>

            <NewQuizResult>
                <p>Top community picks for Fantasy ...</p>
            </NewQuizResult>

            <div
                ref={newContainerRef}
                style={{
                    width: "1150px",
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                }}
            >
                <NewContentBox>
                    {CP_FANTASY.map((item) => (
                        <NewCPcard key={item.id} color={item.color}>
                            <NewCardText>{item.id}</NewCardText>
                        </NewCPcard>
                    ))}
                </NewContentBox>
            </div>

            <NewActionButtons>
                <NewButton
                    style={{ backgroundImage: `url(${newLeftArrow})` }}
                    onClick={() => { handleNewScroll(-NEW_ITEM_WIDTH) }}
                />
                <NewButton
                    style={{ backgroundImage: `url(${newRightArrow})` }}
                    onClick={() => { handleNewScroll(NEW_ITEM_WIDTH) }}
                />
            </NewActionButtons>

            <NewQuizResult>
                <p>Top community picks for Romance ...</p>
            </NewQuizResult>

            <div
                ref={newContainerRef}
                style={{
                    width: "1150px",
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                }}
            >
                <NewContentBox>
                    {CP_ROMANCE.map((item) => (
                        <NewCPcard key={item.id} color={item.color}>
                            <NewCardText>{item.id}</NewCardText>
                        </NewCPcard>
                    ))}
                </NewContentBox>
            </div>

            <NewActionButtons>
                <NewButton
                    style={{ backgroundImage: `url(${newLeftArrow})` }}
                    onClick={() => { handleNewScroll(-NEW_ITEM_WIDTH) }}
                />
                <NewButton
                    style={{ backgroundImage: `url(${newRightArrow})` }}
                    onClick={() => { handleNewScroll(NEW_ITEM_WIDTH) }}
                />
            </NewActionButtons>

            
            <NewQuizResult>
                <p>Top community picks for True Crime ...</p>
            </NewQuizResult>

            <div
                ref={newContainerRef}
                style={{
                    width: "1150px",
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                }}
            >
                <NewContentBox>
                    {CP_TRUECRIME.map((item) => (
                        <NewCPcard key={item.id} color={item.color}>
                            <NewCardText>{item.id}</NewCardText>
                        </NewCPcard>
                    ))}
                </NewContentBox>
            </div>

            <NewActionButtons>
                <NewButton
                    style={{ backgroundImage: `url(${newLeftArrow})` }}
                    onClick={() => { handleNewScroll(-NEW_ITEM_WIDTH) }}
                />
                <NewButton
                    style={{ backgroundImage: `url(${newRightArrow})` }}
                    onClick={() => { handleNewScroll(NEW_ITEM_WIDTH) }}
                />
            </NewActionButtons>


            <div className="seemorebtn">
                <img src={seeMore} alt="seemore" className="seemore-static" />
            </div>
        </NewContainer>

        
    );
};

export default NewCPPicks;

// New styled components
const NewQuizResult = styled.div`
    margin-bottom: 20px;
    text-align: left;
    margin-left: 130px;
    width: 100%;
`;

const NewContainer = styled.div`
    width: 100vw;
    height: 300vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const NewContentBox = styled.div`
    width: 1800px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const NewCPcard = styled.div`
    width: 214px;
    height: 314px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
`;

const NewCardText = styled.p`
    font-size: 70px;
    font-weight: 600;
    color: white;
`;

const NewActionButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 1100px;
    margin-top: 20px;
`;

const NewButton = styled.button`
    width: 25px;
    height: 50px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.5s ease;

    &:hover {
        //add later
    }
`;


