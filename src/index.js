import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {WelcomePage} from "./pages/welcome/WelcomePage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {MainPage} from "./pages/main/MainPage";
import {DetailPage} from "./pages/detail/DetailPage";
import {RecoilRoot} from "recoil";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RecoilRoot>
          <Router>
              <Routes>
                  <Route path="/" element={<WelcomePage />} />
                  <Route path="/main" element={<MainPage />} />
                  <Route path="/detail" element={<DetailPage />} />
              </Routes>
          </Router>
      </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
