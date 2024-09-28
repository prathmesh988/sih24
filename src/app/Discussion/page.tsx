"use client";
import DiscussionCard from "@/components/DiscussionCard";
import Wrapper from "@/components/Wrapper";

import RedditCard from "@/components/RedditCardComponent";
function Page() {
  return (
    <Wrapper>
      <div className="flex  flex-col justify-center w-[60%] ">
        {Array.from({ length: 10 }).map((_, index) => (
          <RedditCard
            key={index}
            postedby="Jhon Doe"
            duration="5 hours"
            title="No body"
            imgageurl=""
            TotalUpvotes={10}
            discription=""
            comments={5}
          />
        ))}
      </div>{" "}
    </Wrapper>
  );
}
export default Page;
