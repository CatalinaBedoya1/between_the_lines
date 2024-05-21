import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "./CreatePost.css";
import publishicon from '../assets/PublishIcon.png';
import addimage from '../assets/AddPhotoIcon.png';

const CreatePost = () => {
  const [forum, setForum] = useState("");
  const [threadList, setThreadList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUserName = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/users/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
      const data = await response.json();
      return data.user_name || ""; // Check if user_name exists in the response
    } catch (error) {
      console.error("Error fetching user details:", error);
      return ""; // Return empty string on error
    }
  };
  

  const createTopic = async (userName, content) => { // Modify the function signature to accept content
    try {
      const userId = localStorage.getItem("_id");
      console.log("User ID:", userId); // Debug statement
      if (!userId) {
        throw new Error("User ID is not available");
      }
  
      const response = await fetch("http://localhost:4000/api/create/topic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: forum,
          userId: userId,
          userName: userName,
          content: content, // Pass the content to the backend
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setForum(""); // Clear the input field
        fetchTopics(currentPage); // Fetch topics after creating a new one
      } else {
        throw new Error(data.error || "Failed to create topic");
      }
    } catch (error) {
      console.error("Error creating topic:", error);
      alert("An error occurred while creating the topic.");
    }
  };

  const fetchTopics = async (page = 1) => {
    try {
      const response = await fetch(`http://localhost:4000/api/topics?page=${page}&limit=5`);
      if (!response.ok) {
        throw new Error("Failed to fetch topics");
      }
      const data = await response.json();
      const topicsWithShowContent = data.results.map((topic) => ({ ...topic, showContent: false }));
      setThreadList(topicsWithShowContent || []);
      setCurrentPage(page);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching topics:", error);
      alert("An error occurred while fetching topics.");
    }
  };
  
  

  useEffect(() => {
    fetchTopics(); // Fetch topics when the component mounts
  }, []);

  const handleThreadSubmit = async (e) => {
    e.preventDefault();
    const content = document.getElementById("contentTextarea").value; // Capture content from textarea
    if (forum.trim() !== "") {
      try {
        const userId = localStorage.getItem("_id");
        const userName = await fetchUserName(userId); // Fetch username
        createTopic(userName, content); // Pass content to createTopic function
      } catch (error) {
        alert("An error occurred while fetching user details.");
      }
    } else {
      alert("Please enter a title for the forum topic.");
    }
  };
  

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      fetchTopics(page);
    }
  };

  const toggleThreadContent = (threadId) => {
    setThreadList((prevThreadList) =>
      prevThreadList.map((thread) =>
        thread.id === threadId ? { ...thread, showContent: !thread.showContent } : thread
      )
    );
  };

  return (
    <Container>
      <ThreadListContainer>
        <ForumsTitle>
          Forums:
          <div className="subtitles">
            <span>Topics</span>
            <span className="date">Date</span> {/* Apply the date class here */}
          </div>
        </ForumsTitle>

        <ThreadList>
          {threadList.map((thread) => (
            <ThreadItem key={thread.id}>
              <h3 onClick={() => toggleThreadContent(thread.id)}>{thread.topic}</h3>
              <div className="thread-details">
              <p>Created by: {thread.user_name}</p>
                <p>{new Date(thread.date).toLocaleString()}</p>
              </div>
              {thread.showContent && (
                <ThreadContent>
                  <p>{thread.content}</p>
                </ThreadContent>
              )}
            </ThreadItem>
          ))}
        </ThreadList>

        <Pagination>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </Pagination>
      </ThreadListContainer>
      <FormContainer>
        <Form onSubmit={handleThreadSubmit}>
          <Select className='createPostText' name="category" id="category">
            <option value="general">General</option>
            <option value="bookOfTheMonth">Book Of The Month</option>
            <option value="recommendations">Recommendations</option>
            <option value="feedback">Feedback</option>
          </Select>
          <Input
            className="createPostText"
            placeholder="Create a title"
            value={forum}
            onChange={(e) => setForum(e.target.value)}
          />
         <TextArea
            id="contentTextarea" // Add id to textarea
            className="createPostBodyText"
            placeholder="Begin typing . . ."
          />

          <CheckboxContainer>
            <CheckSquare type="checkbox" />
            <CheckboxLabel>Does this message</CheckboxLabel>
          </CheckboxContainer>
          <div className="addImageBtn">Add Photo</div>
          <img src={addimage} alt="Add Image Icon" className='imageicon' />
          <Button type='submit'>Publish</Button>
          <img src={publishicon} alt="Publish Icon" className='publishicon' />
        </Form>
      </FormContainer>
    </Container>
  );
};

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  button {
    padding: 10px;
    background-color: #f68aaf;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #d75a8b;
    }

    &:disabled {
      background-color: #ddd;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 16px;
    color: #333;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
  padding: 10px;
`;

const ForumsTitle = styled.div`
  font-family: "Agbalumo", system-ui;
  font-weight: 400;
  font-style: normal;
  color: #3E2D70;
  font-size: 32px;
  border-bottom: 2px solid #3E2D70; 
  padding-bottom: 10px; 
  width: 100%;
  text-align: left;

  .subtitles {
    font-size: 14px;
    color: #3E2D70;
    display: flex;
    justify-content: space-between;
  }

  .date {
    margin-right: 120px; /* Adjust the margin as needed */
  }
`;

const FormContainer = styled.div`
  background-color: #4281A4;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin-bottom: 40px; /* Add more margin for space */
  display: flex;
  flex-direction: column;
  font-size: 20px;
  text-align: center; /*card*/
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  min-height: 100px;
`;

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

const Button = styled.button`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  width: 200px;
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 18px;
  color: #ffffff;
  background-color: #F8A2C0;
  cursor: pointer;
  box-shadow: 0 0 0 4px #ffffff;
  margin-left: 320px;
  margin-top: -55px;

  &:hover {
    background-color: #d75a8b;
  }
`;

const ThreadListContainer = styled.div`
  width: 100%;
  max-width: 800px; /* Expand the width */
  margin-bottom: 40px; /* Add more space between the form and threads */
`;

const ThreadList = styled.ul`
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
`;

const ThreadItem = styled.li`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 10px 0;
    font-size: 18px;
    color: #3E2D70;
    font-family: "Manrope", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    cursor: pointer;
  }

  .thread-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 14px;
    color: #3E2D70;
  }
`;
const ThreadContent = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

export default CreatePost;
