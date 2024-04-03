import React from 'react';
import "./CreatePost.css";



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
      <input  className="createPostText"  placeholder="Type catchy Title"/>
      <br></br>
      <input  className="createPostBodyText"  placeholder="Begin Typing"/>

  </div>
</div>
  );
};

export default CreatePost;


