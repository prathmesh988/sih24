import { title } from "process";
import React, { useState } from "react";

const RedditCard = ({
  postedby,
  duration,
  title,
  imgageurl = "",
  TotalUpvotes,
  discription = "",
  comments,
}: {
  postedby: string;
  duration: string;
  title: string;
  imgageurl: string;
  discription: string;
  TotalUpvotes: number;

  comments: number;
}) => {
  const [upvote, setUpvote] = useState<number>(TotalUpvotes);

  const handleUpvote = () => {
    setUpvote(upvote + 1);
  };

  const handleDownvote = () => {
    if (upvote > 0) {
      setUpvote(upvote - 1);
      // Add a downvote
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Header: Post Info */}
      <div className="px-4 py-2">
        <div className="text-sm text-gray-600">
          Posted by <span className="font-bold">{postedby}</span> {duration} ago
        </div>
        <h2 className="text-lg font-bold text-gray-900 mt-1">{title}</h2>
      </div>

      {/* Image */}
      <div className="relative">
        <p>{discription}</p>
        {imgageurl == "" ? null : (
          <img
            src="/mnt/data/image.png"
            alt="Reddit post image"
            className="w-full h-auto object-cover"
          />
        )}
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-gray-500 text-sm">
        {/* Upvotes/Downvotes */}
        <div className="flex items-center">
          <button
            className="text-gray-500 hover:text-red-500 focus:outline-none"
            onClick={handleUpvote}
          >
            ▲
          </button>
          <span className="mx-2">{upvote}</span>
          <button
            className="text-gray-500 hover:text-blue-500 focus:outline-none"
            onClick={handleDownvote}
          >
            ▼
          </button>
        </div>

        {/* Actions: Comments, Share, Save */}
        <div className="flex space-x-4">
          <button className="hover:text-blue-500 focus:outline-none">
            <i className="fas fa-comment-alt"></i>
            {comments} Comments
          </button>
          <button className="hover:text-blue-500 focus:outline-none">
            <i className="fas fa-share"></i> Share
          </button>
          <button className="hover:text-blue-500 focus:outline-none">
            <i className="fas fa-save"></i> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedditCard;
