import React from "react";
import ForYouCard from "../components/forYouCard";

const ForYou = () => {
  return (
    <div>
      <ForYouCard />
    </div>
  );
};

export default ForYou;

{/* <div className="feedpage__contents__plans">
  {planList.map((plan: any, idx: number) => {
    return (
      <PlanSummary
        key={idx}
        id={plan.id}
        title={plan.title}
        desc={plan.desc}
        writer={plan.writer}
        dayCount={plan.dayCount}
        representAddr={plan.representAddr}
      />
    );
  })}
</div> */}