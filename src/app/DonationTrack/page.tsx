"use client";

import React from "react";
import Wrapper from "@/components/Wrapper";
const DonatedCards = ({
  DonatedAmount,
  DonatedTo,
  DonatedDate,
  fundName,
}: {
  DonatedAmount: number;
  DonatedTo: string;
  DonatedDate: string;
  fundName: string;
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-md w-[50%] h-[50%]">
      {/* Left side: PDF icon and file info */}
      <div className="flex  items-center space-x-4">
        {/* Placeholder for PDF icon */}

        {/* File name and status */}
        <div>
          <p className="text-gray-800 font-medium">{fundName}</p>
          <div className="flex flex-col gap-2">
            <span className="text-gray-800 text-sm">
              Donated Amount :{DonatedAmount}
            </span>
            <span className="text-gray-800 text-sm">
              Donated Date :{DonatedDate}
            </span>
            <span className="text-gray-800 text-sm">
              Donated To: {DonatedTo}
            </span>
          </div>
        </div>
      </div>

      {/* Right side: Reupload button */}
    </div>
  );
};

const Donations = [
  {
    id: 1,
    DonatedAmount: 1000,
    DonatedTo: "XYZ",
    DonatedDate: "12/12/2021",
    fundName: "Relief for homless people",
  },
  {
    id: 2,
    DonatedAmount: 2000,
    DonatedTo: "ABC",
    DonatedDate: "12/12/2021",
    fundName: "Donation for education",
  },
  {
    id: 3,
    DonatedAmount: 3000,
    DonatedTo: "DEF",
    DonatedDate: "12/12/2021",
    fundName: "Donation for food",
  },
];

function page() {
  return (
    <Wrapper>
      <div className="pl-[-200px] flex justify-center p-4">
        <div className="flex flex-col items-center w-full h-[95vh] max-w-4xl  bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-2xl font-semibold text-black mt-4">
            Track Your Donations
          </h4>
          <div className="flex flex-col items-start w-full p-4 gap-4">
            <h4 className="text-lg font-semibold">
              Total College Funds: 256,000 Rs
            </h4>
            <h3>
              <span className="text-blue-500">Fund Name:</span> Relief for
              homeless people
            </h3>
            <div className="w-full h-[70vh] flex flex-col gap-2 items-center p-4 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-auto">
              <h4 className="self-start text-lg font-semibold mb-4">
                Donations
              </h4>
              {Donations.map((Donation) => (
                <DonatedCards
                  key={Donation.id}
                  DonatedAmount={Donation.DonatedAmount}
                  DonatedTo={Donation.DonatedTo}
                  DonatedDate={Donation.DonatedDate}
                  fundName={Donation.fundName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default page;
