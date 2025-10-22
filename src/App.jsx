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
<<<<<<< HEAD
import Download from "./components/Download.jsx";
import ContactInvestmentDesk from "./components/ContactInvestmentDesk.jsx";
=======
import ContactInvestmentDesk from './components/ContactInvestmentDesk.jsx';
import Download from "./components/Downloads.jsx";
import NigeriaInvestment from "./components/NigeriaInvestment.jsx"
>>>>>>> a9a8dc47d91f3af68a9110d7b6854704a54d473c

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
<<<<<<< HEAD
        {/* <Route path="/explore-state/lagos" element={<LagosState />} /> */}
        <Route path="/explore-state/lagos/opportunities-details" element={<OpportunitiesDetails /> } />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<ContactInvestmentDesk />} />
=======
        <Route path="/explore-state/lagos" element={<LagosState />} />
        <Route path="/explore-state/lagos/opportunities-details" element={<OpportunitiesDetails />} />
        <Route path="/explore-state/lagos/opportunities-details/contactinvestmentdesk" element={<ContactInvestmentDesk />} />
        <Route path="/download" element={<Download />} />
        <Route path="/NigeriaInvestment" element={<NigeriaInvestment />} />
>>>>>>> a9a8dc47d91f3af68a9110d7b6854704a54d473c
      </Routes>
    </>
  )
}

export default App
