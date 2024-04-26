import "./App.css";
import "./fonts/fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpeningPage from "./Components/openingPage";
import FirstPage from "./Components/LandingPage/FirstPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import SideBar from "./Components/DashBoard/SideBar";
import DashBoard from "./Components/DashBoard/DashBoard";
import Cse from "./Components/DashBoard/Cse";
import ThirdYear from "./Components/DashBoard/Year/Third/ThirdYear";
import Micro from "./Components/DashBoard/Year/Third/Micro";
import Network from "./Components/DashBoard/Year/Third/Network";
import Login from "./Components/Authentications/Login";
import Signup from "./Components/Authentications/Signup";
import Third_Intro from "./Components/DashBoard/Year/Third/Third_Intro";

import Home from "./utils/Home";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";

// import Contact from "./utils/Contact";
// import Testimonials from "./utils/Testimonials";
// import Insight from "./utils/Insight";

function App() {
  const [user, setUser] = useState(false);
  const updateUserState = (isLoggedIn) => {
    setUser(isLoggedIn);
  };
  const auth = getAuth();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("SignOut successfully...");
        setUser(false);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return (
    <>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<OpeningPage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/home" element={<FirstPage />}></Route>
          <Route exact path="/contact" element={<ContactPage />}></Route>
          <Route exact path="/dashboard" element={<SideBar />}>
            <Route path="/dashboard/" element={<DashBoard />}></Route>
            <Route path="/dashboard/cse" element={<Cse />}>
              <Route path="/dashboard/cse/3rd" element={<ThirdYear />}>
                <Route
                  path="/dashboard/cse/3rd/"
                  element={<Third_Intro />}
                ></Route>
                <Route
                  path="/dashboard/cse/3rd/micro"
                  element={<Micro />}
                ></Route>
                <Route
                  path="/dashboard/cse/3rd/network"
                  element={<Network />}
                ></Route>
              </Route>
            </Route>
          </Route>
        </Routes>`qq
      </Router> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Home userState={user} userLogOut={handleLogOut}/>}></Route>
          <Route exact path="/signin" element={<Login updateUserState={updateUserState}/>}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
