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

--insert fake users(as a test run to check )
INSERT INTO users (user_name, user_email, user_password) 
VALUES ('henry', 'henry213@gmail.com','kth18822');