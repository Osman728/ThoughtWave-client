# Project Title

Thought Wave

## Overview

The app is a social blogging platform where users can create, read, update, and delete blog posts. It facilitates the sharing of content, connecting users through their shared interests.

### Problem

Many individuals seek a platform to express their thoughts and experiences, and existing solutions may lack a seamless integration of social and blogging features. This app aims to address this gap by providing a user-friendly platform for content creation and interaction.

### User Profile

The app targets anyone and anybody looking for a community-driven blogging experience. Users will create posts, engage with others through comments and likes, and explore content based on categories of interest.

### Features

User Authentication:

- Secure registration and login functionality.

Posts CRUD Operations:

- Create, read,blog posts.

- View other users' profiles 

Mob Design:

- Ensure a seamless experience for mobdevices.

Responsive Design:

- Ensure a seamless experience across various devices.


## Implementation

### Tech Stack

- React.js
- Node.js
- Express.js
- Scss
- React Router
- React Quill
- MySql
- Multer

### APIs

NO External sources of Api

### Sitemap

- Home Page (/)

  - Header: Logo, login , sigup
  - Create a new post button,profile button,home button,
  - post previews



- Create a Post Page (/write)

  - Form to create a new blog post

- Profile Page (/profile/:userId)

  - User information (name, username, user pic,email)

- Single Blog Post Page (/post/:postId)
  - Specific post content
  - Title, Author, Content,profile pic,Category


### Mockups

### Login

![](./assets/Wirframe/IMG_8618.JPG)

### HomePage

![](./assets/Wirframe/IMG_8615.JPG)

### SinglePost

![](./assets/Wirframe/IMG_8620.JPG)



### UserProfile

![](./assets/Wirframe/IMG_8617.JPG)

### Create 

![](./assets/Wirframe/IMG_8616.JPG)

### Data

### DATA RELATIONSHIP

![](./assets/Wirframe/Screenshot 2024-02-05 at 09.58.02.png)

### Endpoints

Get User Profile:

**GET /api/users/profile/:userId'**

Response:

{
"userId": 1,
"username": "exampleUser",
"name": "John Doe",
"profilePic": "https://example.com/profile.jpg"
}

Get User Profile:

**PUT /api/users/profile/:userId**

Response: {
"userId": 1,
"username": "exampleUser",
"name": "Updated Name",
"profilePic": "https://example.com/updated-profile.jpg"
}

Create a Post:

**POST /api/posts**

Response: {
"postId": 2,
"title": "Another Post",
"content": "This is another interesting post.",
"createdAt": "2024-01-23T14:00:00Z",
"updatedAt": "2024-01-23T14:00:00Z",
"userId": 1,
"categoryId": 1
}

Get All Posts:

**GET /api/posts**

Response:
[
{
"postId": 1,
"title": "My First Post",
"content": "This is the content of the first post.",
"createdAt": "2024-01-23T12:00:00Z",
"updatedAt": "2024-01-23T12:30:00Z",
"userId": 1,
"category": "Tech"
},
{
"postId": 2,
"title": "Another Post",
"content": "This is another interesting post.",
"createdAt": "2024-01-23T14:00:00Z",
"updatedAt": "2024-01-23T14:00:00Z",
"category": "Tech"
"image_url":"https://example.com/updated-profile.jpg",
"name": "Updated Name",
"profilePic": "https://example.com/updated-profile.jpg"
},
// More posts...
]

Get Single Post:

**GET /api/posts/:postId**

Response:
{
"postId": 1,
"title": "My First Post",
"content": "This is the content of the first post.",
"createdAt": "2024-01-23T12:00:00Z",
"updatedAt": "2024-01-23T12:30:00Z",
"image_url":"https://example.com/updated-profile.jpg",
"name": "Updated Name",
"profilePic": "https://example.com/updated-profile.jpg"
"categoryId": 2
}


### Auth

It depends if ican implentent it.

## Roadmap

- Front-end

Project Setup:

- Set up the React.js frontend project.
- Create basic components for the defined pages.
- Apply initial styling.

User Authentication:

- Implement user registration and login components.
- Connect frontend to API endpoints for authentication.

Posts CRUD Operations:

- Set up UI components for creating, retrieving, updating, and deleting posts.
- Connect frontend to API endpoints for posts operations.


User Posts and Profile:

- Develop UI components for displaying user posts.
- Create user profile pages and connect them to the backend.


- Single Post Page:

- Develop UI for a detailed view of a single blog post.


Back-end

Project Setup:

- Initialize the Node.js and Express backend.
- Set up the MySQL database and create initial migrations.

User Authentication:

- Implement user registration and login functionality in the backend.
- Create API endpoints for user authentication.

Posts operations:

- Set up API endpoints for creating, retrieving posts.
- Implement backend logic for posts operations.

User Posts and Profile:

- Implement API endpoints for retrieving a user's posts.
- Create logic for user profile backend features.




Single Post Page:

- Create logic for retrieving detailed information about a single blog post.

-Big fixes

Document the backend code and API endpoints.

## Nice-to-haves

Responsive Design:

- Ensure a seamless experience across various devices.


-Search Functionality:

- Search for specific posts or users.
User Interactions:

- Like and comment on blog posts.

Categories:

- Categorize posts for easy navigation.
- Explore content based on specific categories.

Dark Mode:

- Implement a dark mode option for users who prefer a different visual theme.

Notifications:

- Introduce a notification system to alert users about new likes, comments, or interactions on their posts.

User Analytics:

- Provide users with insights into the performance of their posts (e.g., views, likes).
- Implement basic analytics features for users to track engagement.
