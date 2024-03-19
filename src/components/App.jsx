import './App.css'
import { Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import OurTeam from './OurTeam';
import Membership from './Membership';
import Agents from './Agents';
import { Error404 } from './Error404';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  )
}