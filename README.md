# hypergo

React Video Clone
A simplified video clone web application built with React.js and Axios for fetching data.

Description
This web application allows users to view a list of predefined video thumbnails, click on a thumbnail to play the video, and see basic information about the video such as the title and description. It fetches videos from an API in a paginated manner and utilizes React components for managing state and props effectively.

Features
View a list of video thumbnails
Click on a thumbnail to play the video
Pagination for navigating through video pages
Like and dislike functionality for each video
Responsive design for various screen sizes
Installation
Clone the repository:


git clone <repository-url>
Navigate to the project directory:


cd react-video-clone
Install dependencies:

bash

npm install
Start the development server:


npm start
Open your browser and visit http://localhost:3000 to view the application.

Usage
Browse through the list of video thumbnails.
Click on a thumbnail to play the video.
Use pagination buttons to navigate between video pages.
Like or dislike a video by clicking the corresponding buttons.
Close the video player by clicking the close button.
Dependencies
React.js
Axios
Tailwind CSS
React Player
API Reference
The application fetches video data from the following API endpoint:

https://internship-service.onrender.com/videos?page={page}
Save to grepper
Replace {page} with the page number to fetch.