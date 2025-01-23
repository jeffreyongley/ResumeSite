import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import LangAndTech from './components/LangAndTech'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/ResumeSite" element={<App />} />
        <Route path="/workExperience" element={<WorkExperience />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/langAndTech" element={<LangAndTech />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
