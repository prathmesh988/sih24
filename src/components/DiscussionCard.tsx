import React, { useState } from "react";

// This component accepts props to populate content dynamically
const RedditCard = ({
  user,
  timeAgo,
  title,
  upvotes,
  comments,
  shares,
  downvotes,
  post,
}: {
  user: string;
  timeAgo: string;
  title: string;
  upvotes: number;
  comments: number;
  shares: number;
  downvotes: number;
  post: any;
}) => {
  const [upvote, setUpvote] = useState(upvotes);
  const [downvote, setDownvote] = useState(downvotes); // Track downvotes separately
  const [comment, setComment] = useState(comments);
  const [share, setShare] = useState(shares);

  // Logic to handle upvotes and downvotes
  const handleUpvote = () => {
    setUpvote(upvote + 1);
    if (downvote > 0) {
      setDownvote(downvote - 1); // Remove a downvote if there is one
    }
  };

  const handleDownvote = () => {
    if (upvote > 0) {
      setUpvote(upvote - 1);
      setDownvote(downvote + 1); // Add a downvote
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4  text-white rounded-lg shadow-md m-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_ozj7iktd1k9a1.png"
            alt="subreddit icon"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h2 className="text-sm font-bold">{user}</h2>
            <p className="text-xs text-gray-400">{timeAgo} • Suggested</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="mt-4">
        <h1 className="text-lg font-semibold text-black">{title}</h1>
        <div>
          <p className="mt-2 text-sm text-black">{post}</p>
        </div>
      </div>

      {/* Footer with Upvote/Downvote, Comments, and Share */}
      <div className="mt-4 flex items-center justify-between text-gray-400 text-sm">
        <div className="flex items-center space-x-4">
          {/* Upvote Button */}
          <button className="flex items-center" onClick={handleUpvote}>
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <div className="">{upvote}</div>
          {/* Downvote Button */}
          <button className="flex items-center" onClick={handleDownvote}>
            <svg
              className="w-5 h-5 mr-1 rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>

          {/* Share Button */}
          <button
            className="flex items-center"
            onClick={() => setShare(share + 1)}
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            {share}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedditCard;
