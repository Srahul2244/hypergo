import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(
    () => {
      fetchVideos();
    },
    [currentPage]
  );

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `https://internship-service.onrender.com/videos?page=${currentPage}`
      );
      const responseData = response.data.data;
      setVideos(responseData.posts);
      setTotalPages(responseData.totalPages);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleThumbnailClick = video => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const handlePagination = page => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Video Clone</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map(video => (
          <div
            key={video.postId}
            className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
            onClick={() => handleThumbnailClick(video)}
          >
            <img
              src={video.submission.thumbnail}
              alt={video.submission.title}
              className="w-full h-48 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{video.submission.title}</h2>
            <p className="text-gray-600">{video.submission.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-l-md hover:bg-blue-600"
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <h1 className="flex items-center justify-center w-12 h-12 rounded-full mx-4 bg-gray-200 text-blue-500 font-bold text-xl">
          {currentPage + 1}
        </h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
          onClick={() => handlePagination(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
      {selectedVideo && (
        <div className="fixed top-0 left-[500px] w-[400px] h-full bg-black bg-opacity-75 flex justify-center items-center">
          <div className="relative">
            <ReactPlayer
              url={selectedVideo.submission.mediaUrl}
              width="70%"
              height="40%"
              controls
              playing
              onEnded={handleCloseVideo}
            />
            <button
              className="absolute top-2 right-2 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200"
              onClick={handleCloseVideo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
