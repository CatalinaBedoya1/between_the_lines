import React, { useState } from 'react';

const createTopic = () =>  {
    fetch("http://localhost:4000/api/create/topic", {
        method: "POST",
        body: JSON.stringify({
            topic,
            userID: localStorage.getItem("_id"),
        }),
        headers: {
            "Content-type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) =>  console.error(err));
};
const handleSubmit = (e) => {
    e.preventDefault();
    createTopic();
    setTopic("");
};
const topicList = [];
app.post("/api/create/topic", async (req, res) => {
const { topic, userId } = req.body;
const topicId = generateID();

    topicList.unshift({
        id: topicId,
        topics: topic,
        replies: [],
        views: [],
        userId,
        date: [],
    });

    //👇🏻 Returns a response containing the posts
    res.json({
        message: "Topic created successfully!",
        topics: topicList,
    });
});