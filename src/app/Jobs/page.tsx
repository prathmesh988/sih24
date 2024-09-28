"use client";
import React, { useState } from "react";
import NavSearch from "@/components/NavSearch";
import Wrapper from "@/components/Wrapper";
import { Noto_Sans_Anatolian_Hieroglyphs } from "next/font/google";
// import { button } from "@mantine/core";

const JobDetails = ({
  title,
  role,
  durationPosted,
  discriptino,
  skills,
  salary,
  details,
}: {
  title: string;
  role: string;
  durationPosted: string;
  discriptino: string;
  skills: string[];
  salary: string;
  details: {
    type: string;
    experience: string;
    noticePeriod: string;
    shift: string;
    placementType: string;
    location?: string;
  };
}) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800">
        {title} at {role}
      </h2>
      <p className="text-sm text-gray-500">Posted {durationPosted} ago</p>

      <div className="mt-4">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded-full">
          {salary}
        </span>
        <span className="inline-block bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-full ml-2">
          {details.type} - {details.experience}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">Skills:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {/* <li>MongoDB, NoSQL</li>
          <li>React Native, MeteorJS</li>
          <li>AWS, Git, JavaScript</li>
          <li>Node JS, React JS</li> */}
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">Details:</h3>
        <p className="text-gray-700">
          Experience: {details.experience}
          <br />
          Salary: {salary}
          <br />
          Notice Period: {details.noticePeriod}
          <br />
          Shift: {details.shift}
          <br />
          Placement Type: {details.placementType}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">Description:</h3>
        <p className="text-gray-700">{discriptino}</p>
      </div>

      <div className="mt-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
          Apply Now
        </button>
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded ml-2 hover:bg-gray-300">
          Save
        </button>
      </div>
    </div>
  );
};

const JobCard = ({
  card,
  title,
  role,
  durationPosted,
  handleSelectJob,
}: {
  card: any;
  title: string;
  role: string;
  durationPosted: string;
  handleSelectJob: (job: any) => void;
}) => {
  return (
    <>
      <div className="flex  w-[60%] bg-white border border-gray-200 rounded-lg shadow-md p-4  ">
        <div className="flex gap-5 w-1/2">
          {/* Placeholder for the logo or image */}
          <div className="mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Company Logo"
              className="w-12 h-12 object-cover"
            />
          </div>
          <div>
            {/* Job description */}
            <div>
              <h2 className="text-lg font-semibold mb-2">{title}</h2>
              <p className="text-gray-500">{role}</p>
              <p className="text-gray-400 text-sm">
                Posted {durationPosted} ago
              </p>
            </div>

            {/* Apply button */}
          </div>
        </div>

        <button
          className="  self-end bg-blue-500 w-1/2 h-1/2 text-white px-4 py-2 rounded-md"
          onClick={() => handleSelectJob({ ...card })}
        >
          Check
        </button>
      </div>
    </>
  );
};

const jobs = [
  {
    title: "Software Engineer intern",
    role: "Google",
    durationPosted: "5 hours ",

    discriptino: `
    Software Engineer responsibilities include:
    Executing full lifecycle software development
    Programming well-designed, testable, efficient code
    `,
    skills: ["React", "Node", "MongoDB", "Express"],
    salary: "USD 100k - 150k / year",
    details: {
      type: "Entry Level",
      experience: "freshers",
      noticePeriod: "30 Days",
      shift: "Asia/Kolkata (IST)",
      placementType: "Full Time Permanent",
    },
  },

  {
    title: "Software Engineer",
    role: "Google",
    durationPosted: "3 day",

    discriptino: `
    Software Engineer responsibilities include:
    Executing full lifecycle software development
    Programming well-designed, testable, efficient code
    
    `,
    skills: ["React", "Node", "MongoDB", "Express"],
    salary: "USD 100k - 150k / year",
    details: {
      type: "Entry Level",
      experience: "freshers",
      noticePeriod: "30 Days",
      shift: "Asia/Kolkata (IST)",
      placementType: "Full Time Permanent",
    },
  },
  {
    title: "Software Engineer",
    role: "Google",
    durationPosted: "1 day",

    discriptino: `
    Software Engineer responsibilities include:
    Executing full lifecycle software development
    Programming well-designed, testable, efficient code
    
    `,
    skills: ["React", "Node", "MongoDB", "Express"],
    salary: "USD 100k - 150k / year",
    details: {
      type: "Entry Level",
      experience: "freshers",
      noticePeriod: "30 Days",
      shift: "Asia/Kolkata (IST)",
      placementType: "Full Time Permanent",
    },
  },
  {
    title: "Product Manager",
    role: "Google",
    durationPosted: "1 day",
    discriptino: `
  Product Manager responsibilities include:
  Developing product requirements and roadmaps
  Leading product managers and coordinating with engineering, marketing and other teams
  
  `,
    skills: [
      "Product Management",
      "Product Development",
      "Product Strategy",
      "Product Marketing",
    ],
    salary: "USD 150k - 200k / year",
    details: {
      type: "Mid Level",
      experience: "3-5 years",
      noticePeriod: "30 Days",
      shift: "Asia/Kolkata (IST)",
      placementType: "Full Time Permanent",
    },
  },
];
function CompanyInsights({
  rating,
  review,
  employees,
  revenue,
  money,

  interviewQuestionsAnswers,
}: any) {
  if (
    !rating ||
    !money ||
    !!review ||
    !employees ||
    !revenue ||
    !interviewQuestionsAnswers
  ) {
    return null;
  }

  return (
    <div className="mt-4 bg-gray-50 p-4 rounded-md">
      <h3 className="font-semibold text-lg">Company Insights</h3>
      <p>
        <strong>Rating:</strong> {rating}
      </p>
      <p>
        <strong>Review:</strong> {review}
      </p>
      <p>
        <strong>Employees:</strong> {employees}
      </p>
      <p>
        <strong>Revenue:</strong> {revenue}
      </p>
      <div className="mt-2">
        <h4 className="font-medium">Interview Questions & Answers:</h4>
        {interviewQuestionsAnswers.map((qna: any, index: number) => (
          <div key={index} className="mt-1">
            <h5 className="font-semibold">Q: {qna.q}</h5>
            <p>A: {qna.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function JobAccordion() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  const handleSelectJob = (job: any) => {
    setSelectedJob(job);
  };

  //   <div className="w-[55%] bg-gray-100 p-4 overflow-y-auto">
  //   <h2 className="text-lg font-bold mb-4">Top job picks for you</h2>
  //
  // </div>

  return (
    <Wrapper>
      <div className="flex ">
        <div className="flex  flex-col justify-center w-[60%] gap-2 items-center py-5 ">
          <h4 className=" self">Top Jobs to pick</h4>
          {jobs.map((job, index) => (
            <JobCard
              card={job}
              key={index}
              title={job.title}
              role={job.role}
              durationPosted={job.durationPosted}
              handleSelectJob={handleSelectJob}
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
          <div className="w-[80%] m-2 h-[95vh] p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-y-auto ">
            <h4 className="text-[2em]  font-semibold text-black">
              Job Details
            </h4>

            {selectedJob && (
              <JobDetails
                title={selectedJob.title}
                role={selectedJob.role}
                durationPosted={selectedJob.durationPosted}
                discriptino={selectedJob.discriptino}
                skills={selectedJob.skills || []}
                salary={selectedJob.salary}
                details={selectedJob.details}
              />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
