import React, {useState} from 'react';
import "./CreatePost.css";


const CreatePost = () => {
  const [thread, setThread] = useState("");

  const handleThreadSubmit = (e) => {
    e.preventDefault();
    console.log({ thread });
    setThread("");
  }

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
      <input  className="createPostText"  placeholder="Title"/>
      <br></br>
      <input  className="createPostBodyText"  placeholder="Begin typing . . ."/>
      <br></br>
      <div className="addImageBtn">Add image</div>
      <div className="publishBtn">Publish</div>

  </div>
</div>
  );
};

export default CreatePost;


