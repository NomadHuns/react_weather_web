import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {WelcomePage} from "./pages/welcome/WelcomePage";
import {BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom';
import {MainPage} from "./pages/main/MainPage";
import {DetailPage} from "./pages/detail/DetailPage";
import {RecoilRoot} from "recoil";
import {CommonBottomNavBar} from "./common/components/CommonBottomNavBar";
import {MdLocationOn} from "react-icons/md";
import {GiHamburgerMenu} from "react-icons/gi";

const Layout = () => {
    return (
        <>
            <main style={{ paddingBottom: '80px' }}>
                <Outlet />
            </main>
            <CommonBottomNavBar
                actions={[
                    {
                        path: "/main",
                        icon: <MdLocationOn/>,
                    },
                    {
                        path: "/detail",
                        icon: <GiHamburgerMenu/>,
                    },
                ]}
            />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RecoilRoot>
          <Router>
              <Routes>
                  {/* 바텀 네비게이션바 적용 페이지 */}
                  <Route element={<Layout />}>
                      <Route path="/main" element={<MainPage />} />
                      <Route path="/detail" element={<DetailPage />} />
                  </Route>
                  {/* 바텀 네비게이션바 미적용 페이지 */}
                  <Route path="/" element={<WelcomePage />} />
              </Routes>
          </Router>
      </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();