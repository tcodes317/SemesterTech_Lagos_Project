import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import SignUp from "./components/SignUp.jsx";
import Verification from './components/verification.jsx';
import Verified from './components/verified.jsx';
import SignIn from './components/SignIn.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import ResetPasswords from './components/ResetPasswords.jsx';
import ResetSuccessfully from './components/ResetSuccessfully.jsx';
import ExploreState from "./components/ExploreStates.jsx"
import LagosState from './components/LagosState.jsx';
import OpportunitiesDetails from './components/OpportunitiesDetails.jsx';
import ContactInvestmentDesk from './components/ContactInvestmentDesk.jsx';
import Download from "./components/Downloads.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path="/reset-passwords" element={<ResetPasswords />} />
        <Route path="/reset-successfully" element={<ResetSuccessfully />} />
        <Route path="/explore-state" element={<ExploreState />} />
        <Route path="/explore-state/lagos" element={<LagosState />} />
        <Route path="/explore-state/lagos/opportunities-details" element={<OpportunitiesDetails />} />
        <Route path="/explore-state/lagos/opportunities-details/contactinvestmentdesk" element={<ContactInvestmentDesk />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </>
  )
}

export default App
