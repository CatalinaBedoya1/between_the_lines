import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Replies = () => {
   const [replyList, setReplyList] = useState([]);
   const [reply, setReply] = useState("");
   const [topic, setTopic] = useState("");
   const { id } = useParams();

   useEffect(() => {
      const fetchReplies = () => {
         fetch("http://localhost:4000/api/thread/replies", {
            method: "POST",
            body: JSON.stringify({
               id,
            }),
            headers: {
               "Content-Type": "application/json",
            },
         })
         .then((res) => res.json())
         .then((data) => {
            setReplyList(data.replies);
            setTopic(data.topic);
         })
         .catch((err) => console.error(err));
      };
      fetchReplies();
   }, [id]);

   const handleSubmitReply = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch("http://localhost:4000/api/create/reply", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               reply,
               topicId: id,
               userId: localStorage.getItem("_id"),
            }),
         });
         const data = await response.json();
         if (response.ok) {
            // If reply is created successfully, update replyList state
            setReplyList([...replyList, reply]);
            setReply(""); // Clear the reply input field
         } else {
            throw new Error(data.error || "Failed to create reply");
         }
      } catch (error) {
         console.error("Error creating reply:", error);
         alert("An error occurred while creating the reply.");
      }
   };

   return (
      <main className='replies'>
         <h1>Topic: {topic}</h1>
         <ul>
            {replyList.map((reply, index) => (
               <li key={index}>{reply}</li>
            ))}
         </ul>
         <form onSubmit={handleSubmitReply}>
            <textarea
               value={reply}
               onChange={(e) => setReply(e.target.value)}
               placeholder="Type your reply here..."
            />
            <button type="submit">Submit Reply</button>
         </form>
      </main>
   );
};

export default Replies;
