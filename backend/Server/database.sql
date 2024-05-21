CREATE DATABASE btl;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT 
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);



CREATE TABLE todo(
    todo_id SERIAL,
    user_id UUID,
    description VARCHAR(255),
    PRIMARY KEY (todo_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

--insert fake users(as a test run to check )do this after yall get the database working
INSERT INTO users (user_name, user_email, user_password) 
VALUES ('henry', 'henry213@gmail.com','kth18822');


--book_votes table 
CREATE TABLE book_votes (
    id SERIAL PRIMARY KEY,
    cover_id INTEGER UNIQUE,
    votes INTEGER DEFAULT 0
);

--unique id for each of our four books
INSERT INTO book_votes (cover_id, votes)
VALUES 
    (1, 0), 
    (2, 0), 
    (3, 0), 
    (4, 0); 



CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(255) NOT NULL,
  user_id UUID NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--modified users_profiles for dash 
CREATE TABLE user_profiles (
    user_id UUID PRIMARY KEY,
    bio TEXT,
    profile_picture BYTEA,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);



--to store the history of the forums
CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(255) NOT NULL,
  user_id UUID NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



--table for replies
CREATE TABLE replies (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id UUID NOT NULL,
  topic_id INT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (topic_id) REFERENCES topics(id)
);
