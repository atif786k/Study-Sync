import "./App.css";
import "./fonts/fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import OpeningPage from "./Components/openingPage";
// import FirstPage from "./Components/LandingPage/FirstPage";
// import ContactPage from "./Components/ContactPage/ContactPage";
// import ThirdYear from "./Components/DashBoard/Year/Third/ThirdYear";
// import Third_Intro from "./Components/DashBoard/Year/Third/Third_Intro";
import SideBar from "./Components/DashBoard/SideBar";
import DashBoard from "./Components/DashBoard/DashBoard";

import Home from "./utils/Home";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Cse from "./Components/DashBoard/Cse";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import Micro from "./Components/subjects/Micro";
import Network from "./Components/subjects/Network";
import MobileComp from "./Components/subjects/MobileComp";
import DataStruct from "./Components/subjects/DataStruct";
import DataMin from "./Components/subjects/DataMin";
import Programming from "./Components/subjects/Programming";

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
          <Route
            exact
            path="/"
            element={<Home userState={user} userLogOut={handleLogOut} />}
          ></Route>
          <Route
            exact
            path="/signin"
            element={<Login updateUserState={updateUserState} />}
          ></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          {/* <Route exact path="/dash" element={<Dhome />}></Route>
          <Route exact path="/dash/blogs" element={<Cse />}></Route> */}

          <Route exact path="/dashboard" element={<SideBar />}>
            <Route path="/dashboard/" element={<DashBoard />}></Route>
            <Route path="/dashboard/cse" element={<Cse />}>
              {/* <Route path="/dashboard/cse/3rd" element={<ThirdYear />}>
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
              </Route> */}
              <Route exact path="/dashboard/cse/micro" element={<Micro/>}></Route>
              <Route exact path="/dashboard/cse/mobile" element={<MobileComp/>}></Route>
              <Route exact path="/dashboard/cse/network" element={<Network/>}></Route>
              <Route exact path="/dashboard/cse/dataMin" element={<DataMin/>}></Route>
              <Route exact path="/dashboard/cse/datastruct" element={<DataStruct/>}></Route>
              <Route exact path="/dashboard/cse/program" element={<Programming/>}></Route>
              <Route exact path="/dashboard/cse/crypto" element={<MobileComp/>}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
