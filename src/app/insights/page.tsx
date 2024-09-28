"use client";

import React from "react";
import { useState } from "react";
import Wrapper from "@/components/Wrapper";
import ReviewCard from "@/components/ReviewCard";
import Box from "@mui/material/Box";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import Slider from "@mui/material/Slider";

const filterParams = [
  {
    label: "Company",
    options: ["Google", "Facebook", "Amazon", "Microsoft"],
  },
  {
    label: "Position",
    options: ["Software Engineer", "Product Manager", "Data Scientist"],
  },
  {
    label: "Location",
    options: [
      "New York",
      "San Francisco",
      "Seattle",
      "Los Angeles",
      "Mumbai",
      "Bangalore",
      "Pune",
      "Hydraabad",
    ],
  },

  {
    label: "Interview Difficulty",
    options: ["1", "2", "3", "4", "5"],
  },
];
import {
  Grid,
  Button,
  TextField,
  Autocomplete,
  ratingClasses,
  Rating,
} from "@mui/material";
function page() {
  const [range, setrange] = useState([0, 100]);
  const [ratings, setratings] = useState<number | null>(null);
  return (
    <Wrapper>
      <div className="flex ">
        <div className="flex  flex-col justify-center w-[60%] gap-2 items-center py-5 ">
          {Array.from({ length: 10 }).map((_, index) => (
            <ReviewCard
              username="John Doe"
              position="Software Engineer"
              company="Google"
              companyIcon="https://cdn-icons-png.flaticon.com/512/732/732221.png"
              overview="Overview"
              reviews="Reviews"
              salaries="Salaries"
              benefits="Benefits"
              metaReviews="Meta Reviews"
              metaRating={4.5}
              interviewDifficulty={3}
              description="Description"
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

          <div className="w-[80%] m-2 h-[95vh] p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-auto">
            <h4 className="text-[2em] pl-[90px] font-semibold text-black">
              Filters
            </h4>
            <div className="flex pt-3 justify-center w-full  gap-4">
              <div className="flex flex-col w-[70%] gap-4">
                {filterParams.map((filter, index) => (
                  <Autocomplete
                    key={index}
                    multiple
                    id={`tags-standard-${index}`}
                    options={filter.options}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label={filter.label}
                        className="bg-white rounded-lg"
                      />
                    )}
                    className="bg-gray-100 rounded-lg"
                  />
                ))}

                <span>Salary Range</span>
                <Box sx={{ width: 300 }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={range}
                    onChange={(event, newValue) => {
                      setrange(newValue as number[]);
                    }}
                    valueLabelDisplay="auto"
                  />
                </Box>
                <div className="flex flex-col">
                  <span>Ratings</span>
                  <Rating
                    name="simple-controlled"
                    value={ratings}
                    onChange={(_, newValue) => {
                      setratings(newValue);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span>Global company size</span>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    {/* <div className="flex gap-2">
                      <Radio value="small" />
                      <span>Small</span>
                    </div>
                    <div className="flex gap-2">
                      <Radio value="medium" />
                      <span>Medium</span>
                    </div>
                    <div className="flex gap-2">
                      <Radio value="large" />
                      <span>Large</span>
                    </div> */}
                    {/* 1 - 50

51 - 200

201-500

501-1000

1001-5000

5001 - 10000

10000+ */}

                    <div className="flex gap-2">
                      <Radio value="small" />
                      <span className="mt-2">1 - 50</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio value="medium" />
                      <span className="mt-2">51 - 200</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio value="large" />
                      <span className="mt-2">201-500</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio value="large" />
                      <span className="mt-2">501-1000</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio value="large" />
                      <span className="mt-2">1000+</span>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default page;
