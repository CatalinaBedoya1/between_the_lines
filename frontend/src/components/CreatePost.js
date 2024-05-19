import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CreatePost = () => {
  const [forum, setForum] = useState("");
  const [threadList, setThreadList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const createTopic = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/create/topic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: forum,
          userId: localStorage.getItem("_id"),
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
      setThreadList(data.results || []);
      setCurrentPage(page);
      setTotalPages(data.next ? data.next.page - 1 : 1);
    } catch (error) {
      console.error("Error fetching topics:", error);
      alert("An error occurred while fetching topics.");
    }
  };
  
  useEffect(() => {
    fetchTopics(); // Fetch topics when the component mounts
  }, []);

  const handleThreadSubmit = (e) => {
    e.preventDefault();
    if (forum.trim() !== "") {
      createTopic();
    } else {
      alert("Please enter a title for the forum topic.");
    }
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      fetchTopics(page);
    }
  };

  return (
    <Container>
      <ThreadListContainer>
        <h2>Forum Topics</h2>
        <ul>
          {threadList.map((thread) => (
            <ThreadItem key={thread.id}>
              <h3>{thread.topic}</h3>
              <p>Created by: {thread.userId}</p>
              <p>{new Date(thread.date).toLocaleString()}</p>
            </ThreadItem>
          ))}
        </ul>
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
          <TextArea className="createPostBodyText" placeholder="Begin typing . . ." />
          <CheckboxContainer>
            <CheckSquare type="checkbox" />
            <CheckboxLabel>Does this message contain spoilers?</CheckboxLabel>
          </CheckboxContainer>
          <Button type='submit' className="publishBtn">Publish</Button>
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
  background-color: #f9f9f9;
  padding: 20px;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
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
  color: #333;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f68aaf;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #d75a8b;
  }
`;

const ThreadListContainer = styled.div`
  width: 100%;
  max-width: 600px;
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
  }

  p {
    margin: 0;
    color: #666;
    font-size: 14px;
  }
`;

export default CreatePost;


/*import React, {useState} from 'react';
import "./CreatePost.css";
import styled from 'styled-components';


const CreatePost = () => {
  const [forum, setForum] = useState("");
  const [threadList, setThreadList] = useState([]);

  const createTopic = () =>  {
    fetch("http://localhost:4000/api/create/topic", {
        method: "POST",
        body: JSON.stringify({
            topic: forum,
            userID: localStorage.getItem("_id"),
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message);
            setThreadList(data.topics);
        })
        .catch((err) =>  console.error(err));
  };
        
  const handleThreadSubmit = (e) => {
    e.preventDefault();
    console.log({ forum });
    createTopic();
    setForum("");
  };

  return (
    <div className='createPostContainerOutside'>    
    <div className='createPostContainerInside'>
      <form onSubmit = {handleThreadSubmit}>
        <select className='createPostText' name="cars" id="cars">
          <option value="general">General</option>
          <option value="bookOfTheMonth">Book Of The Month</option>
          <option value="recommendations">Recommendations</option>
          <option value="feedback">Feedback</option>
        </select>
        <br></br>
        <input  className="createPostText"  placeholder="Create a title" value={forum} onChange={(e) => setForum(e.target.value)}/>
        <br></br>
        <input  className="createPostBodyText"  placeholder="Begin typing . . ."/>
        <br></br>
        <CheckboxContainer>
          <CheckSquare type="checkbox" />
          <CheckboxLabel>Does this message contain spoilers?</CheckboxLabel>
        </CheckboxContainer>
        <div className="addImageBtn">Add image</div>
        <button type='submit' className="publishBtn">Publish</button>
      </form>
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

*/