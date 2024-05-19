import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Replies = () => {
   const [replyList, setReplyList] = useState([]);
    const [reply, setReply] = useState("");
    const [topic, setTopic] = useState("");
    const navigate = useNavigate();
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

    const handleSubmitReply = (e) => {
        e.preventDefault();
        console.log({ reply });
        setReply("");
    };

    return <main className='replies'>{/*--UI elements--*/}</main>;
};

export default Replies;