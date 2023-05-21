import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "../common/Nav";
import Home from "./Home";
import ExecutiveSummary from "./ExecutiveSummary";
import OnsiteAnalysis from "./OnsiteAnalysis";
import ExperienceMapping from "./ExperienceMapping";
import Consideration from "./Consideration";
import Decision from "./Decision";
import Loyality from "./Loyality";
import UserFeedback from "./UserFeedback";
import Conclusion from "./Conclusion";
import About from "./About";
import { useState } from "react";
import Menu from "../data/files/Icons/list.png";
import ConsiderationPage2 from "./nextPages/ConsiderationPages/ConsiderationPage2";
import ConsiderationPage3 from "./nextPages/ConsiderationPages/ConsiderationPage3";
import LoyalityPage2 from "./nextPages/LoyalityPage/LoyalityPage2";
import Loyalitypage3 from "./nextPages/LoyalityPage/Loyalitypage3";
import LoyalityPage4 from "./nextPages/LoyalityPage/LoyalityPage4";
import DecisionPage2 from "./nextPages/DecisionPages/DecisionPage2";
import DecisionPage3 from "./nextPages/DecisionPages/DecisionPage3";
import DecisionPage4 from "./nextPages/DecisionPages/DecisionPage4";
import DecisionPage5 from "./nextPages/DecisionPages/DecisionPage5";
import ExperienceMappingPage2 from "./nextPages/ExperienceMappingPages/ExperienceMappingPage2";
import ExperienceMappingPage3 from "./nextPages/ExperienceMappingPages/ExperienceMappingPage3";
import AnalysisPage2 from "./nextPages/onSiteAnalysisPages/AnalysisPage2";
import AnalysisPage3 from "./nextPages/onSiteAnalysisPages/AnalysisPage3";
import AnalysisPage4 from "./nextPages/onSiteAnalysisPages/AnalysisPage4";
import AnalysisPage5 from "./nextPages/onSiteAnalysisPages/AnalysisPage5";

export const Pages = () => {
  const [openAppBar, setOpenAppBar] = useState(false);

  return (
    <>
      <Router>
        <div className="flex">
          <Nav open={openAppBar} close={() => setOpenAppBar(false)} />
          <button
            className="flex md:hidden top-2 left-2"
            onClick={() => setOpenAppBar(!openAppBar)}
          >
            <div className="px-2 py-1 absolute z-[1] bg-[#497E4F] rounded-md">
              <img className="w-18 h-18" src={Menu} alt="" />
            </div>
          </button>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/summary" element={<ExecutiveSummary />} />
            <Route exact path="/analysis" element={<OnsiteAnalysis />} />
            <Route exact path="/analysis/page2" element={<AnalysisPage2 />} />
            <Route exact path="/analysis/page3" element={<AnalysisPage3 />} />
            <Route exact path="/analysis/page4" element={<AnalysisPage4 />} />
            <Route exact path="/analysis/page5" element={<AnalysisPage5 />} />
            <Route exact path="/mapping" element={<ExperienceMapping />} />
            <Route
              exact
              path="/mapping/page2"
              element={<ExperienceMappingPage2 />}
            />
            <Route
              exact
              path="/mapping/page3"
              element={<ExperienceMappingPage3 />}
            />
            <Route exact path="/consideration" element={<Consideration />} />
            <Route
              exact
              path="/consideration/page2"
              element={<ConsiderationPage2 />}
            />
            <Route
              exact
              path="/consideration/page3"
              element={<ConsiderationPage3 />}
            />
            <Route exact path="/decision" element={<Decision />} />
            <Route exact path="/decision/page2" element={<DecisionPage2 />} />
            <Route exact path="/decision/page3" element={<DecisionPage3 />} />
            <Route exact path="/decision/page4" element={<DecisionPage4 />} />
            <Route exact path="/decision/page5" element={<DecisionPage5 />} />
            <Route exact path="/loyality" element={<Loyality />} />
            <Route exact path="/loyality/page2" element={<LoyalityPage2 />} />
            <Route exact path="/loyality/page3" element={<Loyalitypage3 />} />
            <Route exact path="/loyality/page4" element={<LoyalityPage4 />} />
            <Route exact path="/feedback" element={<UserFeedback />} />
            <Route exact path="/conclusion" element={<Conclusion />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
