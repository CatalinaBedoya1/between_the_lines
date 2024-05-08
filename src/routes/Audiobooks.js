import React from 'react';
import styled from 'styled-components';




const audiobooks = () => {
    return (
        <AudioBooksContainer>
        <AudiobookHeader>
           
         
        </AudiobookHeader>
        </AudioBooksContainer>

   
    );
};




export default audiobooks;

const AudioBooksContainer = styled.div`
    width: 100%;
    height: 100vh;
`

const AudiobookHeader =styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    // padding-top: 100px;
    // padding-left: 50px;
   
    background-color: #3D326F;
`;
