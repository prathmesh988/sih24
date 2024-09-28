// import React from "reac

// };export default JobCard;
import { comment } from "postcss";
import React from "react";
import FileUploader from "./FileUplaoder";
const UploadCard = ({
  name,
  status,
  comment = "",
  underreview,
}: {
  name: string;
  status: string;
  comment?: string;
  underreview?: boolean;
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-md w-[50%] h-[50%]">
      {/* Left side: PDF icon and file info */}
      <div className="flex items-center space-x-4">
        {/* Placeholder for PDF icon */}
        <img
          src="https://via.placeholder.com/32x32.png?text=PDF"
          alt="PDF icon"
          className="w-8 h-8"
        />
        {/* File name and status */}
        <div>
          <p className="text-gray-800 font-medium">{name}</p>
          <div className="flex gap-2">
            <span className="text-gray-800 text-sm">Status:</span>
            <p className="text-gray-500 text-sm">{status} </p>
          </div>
          {comment && <p className="text-gray-500 text-sm">{comment}</p>}
        </div>
      </div>

      {/* Right side: Reupload button */}
      <button
        disabled
        className={` text-white text-sm font-semibold py-1 px-4 rounded-lg ${
          underreview
            ? "cursor-not-allowed bg-blue-300"
            : "cursor-pointer hover:bg-blue-600 bg-blue-500"
        }`}
      >
        Reupload
      </button>
    </div>
  );
};

const uploadCards = [
  {
    id: 1,
    name: "MyCv.pdf",
    status: "✅Reviewed",
    underreview: true,
    comment: "Good job! Please upload your cover letter.",
  },
  {
    id: 2,
    name: "MyCvWCoverLetter.pdf",
    underreview: true,
    status: "under process",
  },
];

const REviewSEction = () => {
  return (
    <>
      <div className="flex ">
        <div className="flex  flex-col justify-center w-[60%] gap-2 items-center py-5 ">
          <h4 className=" self">Your CV'S</h4>
          {uploadCards.map((card) => (
            <UploadCard
              key={card.id}
              name={card.name}
              status={card.status}
              comment={card?.comment}
              underreview={card.underreview}
            />
          ))}
        </div>
        <div
          className="flex justify-center 
          w-[40%]
            h-screen
          fixed
          right-0   

        "
        >
          {/* filter card  */}

          <div className="w-[80%] m-2 h-[95vh] p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-[2em]  font-semibold text-black">
              Upload Resume
            </h4>
            <p>
              Upload your Resume to the platform The reviewer will be
              automatically according to the schedule of alumni's
            </p>
            <p className="text-[12px] py-2 text-black">
              Note the cv should be in docx or pdf format and if your upload
              your cv using here it will assign new alumni not the same for if
              your uploaded your old cv from here.
            </p>
            <FileUploader />
          </div>
        </div>
      </div>
    </>
  );
};

export default REviewSEction;
