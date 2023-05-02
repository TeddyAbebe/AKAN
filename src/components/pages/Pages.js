import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "../common/Nav";
import Home from "./Home";
import ExecutiveSummary from "./ExecutiveSummary";
import OnsiteAnalysis from "./OnsiteAnalysis";
// import ExperienceMapping from "./ExperienceMapping";
// import { Consideration } from "./Consideration";
// import { Decision } from "./Decision";
// import { Loyallity } from "./Loyallity";
// import { UserFeedback } from "./UserFeedback";
// import { Conclusion } from "./Conclusion";
// import { About } from "./About";

export const Pages = () => {
  return (
    <>
      <Router>
        <div className="flex">
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/summary" element={<ExecutiveSummary />} />
            <Route exact path="/analysis" element={<OnsiteAnalysis />} />
            {/* <Route exact path="/mapping" element={<ExperienceMapping />} /> */}
            {/* <Route exact path="/consideration" element={<Consideration />} /> */}
            {/* <Route exact path="/decision" element={<Decision />} /> */}
            {/* <Route exact path="/loyality" element={<Loyallity />} /> */}
            {/* <Route exact path="/feedback" element={<UserFeedback />} /> */}
            {/* <Route exact path="/conclusion" element={<Conclusion />} /> */}
            {/* <Route exact path="/about" element={<About />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
};
