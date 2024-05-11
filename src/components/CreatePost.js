import React from 'react';
import "./CreatePost.css";
import styled from 'styled-components';



const CreatePost = () => {

  return (
    <div className='createPostContainerOutside'>    

    <div className='createPostContainerInside'>    
      <select className='createPostText' name="cars" id="cars">
      <option value="general">General</option>
      <option value="bookOfTheMonth">Book Of The Month</option>
      <option value="recommendations">Recommendations</option>
      <option value="feedback">Feedback</option>
      </select>
      <br></br>
      <input  className="createPostText"  placeholder="Create a title"/>
      <br></br>
      <input  className="createPostBodyText"  placeholder="Begin typing . . ."/>
      <br></br>
      <CheckboxContainer>
            <CheckSquare type="checkbox" />
            <CheckboxLabel>Does this message contain spoilers?</CheckboxLabel>
      </CheckboxContainer>
      <div className="addImageBtn">Add image</div>
      <div className="publishBtn">Publish</div>

  </div>
</div>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const CheckSquare = styled.input`
  margin-right: 10px;
  
  &:checked {
    accent-color: #F68AAF;
    border-color: #F68AAF;
  }
`;

const CheckboxLabel = styled.div`
  font-size: 18px;
  color: white;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
`;

export default CreatePost;


