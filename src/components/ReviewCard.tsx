import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";

interface ReviewCardProps {
  username: string;
  position: string;
  company: string;
  companyIcon: string;
  overview: string;
  reviews: string;
  salaries: string;
  benefits: string;
  metaReviews: string;
  metaRating: number;
  interviewDifficulty: number;
  description: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  username,
  position,
  company,
  companyIcon,
  overview,
  reviews,
  salaries,
  benefits,
  metaReviews,
  metaRating,
  interviewDifficulty,
  description,
}) => {
  return (
    <div className="w-[30vw]  h-[50vh] p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Top Section: Profile and Company Icon */}
      <div className="flex items-center mb-4">
        <img
          src={companyIcon}
          alt="company icon"
          className="w-12 h-12 rounded-full mr-4 object-cover border border-gray-300"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-800">{username}</h3>
          <p className="text-sm text-gray-500">
            {position} at <span className="font-semibold">{company}</span>
          </p>
        </div>
      </div>

      {/* Tabs for Overview, Reviews, etc */}
      <div className="flex space-x-4 mb-4 border-b border-gray-200 pb-2">
        <button className="text-gray-700 font-semibold border-b-2 border-black focus:outline-none">
          {overview}
        </button>
        <button className="text-gray-500 font-semibold focus:outline-none hover:text-black">
          {reviews}
        </button>
        <button className="text-gray-500 font-semibold focus:outline-none hover:text-black">
          {salaries}
        </button>
        <button className="text-gray-500 font-semibold focus:outline-none hover:text-black">
          {benefits}
        </button>
      </div>

      {/* Meta Reviews & Interview Difficulty */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-500">{metaReviews}</p>
          <p className="text-green-500 font-bold text-lg flex">
            {metaRating}
            <div>
              <Rating
                name="simple-controlled"
                value={metaRating}
                disabled
                precision={0.5}
              />
            </div>
          </p>
        </div>
        <div>
          <p className="text-gray-500">Interview at {company}</p>
          <p className="text-gray-700 font-bold text-lg">
            {interviewDifficulty}/5 difficulty
          </p>
        </div>
      </div>

      {/* Description */}
      <h4 className="text-lg font-bold text-gray-800 mb-2">Description</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ReviewCard;
