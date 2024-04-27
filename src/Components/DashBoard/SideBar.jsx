import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Sidebar, MenuItem, SubMenu, Menu } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dashboard } from "@mui/icons-material";

export default function SideBar() {
  const [collapsed, setCollapsed] = React.useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className="sideBar-dashBoard "
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        backgroundColor: "#ffffff",
        color: "#111111",
      }}
    >

      <Sidebar className="dash-side-bar" collapsed={collapsed}>
        <Menu style={{ marginTop: "10px", position: "relative" }}>
          <MenuItem
            className="menu"
            icon={<MenuRoundedIcon onClick={toggle} />}
          ></MenuItem>
          <MenuItem
            className="hover-effect"
            style={{ marginTop: "30px" }}
            icon={<HomeIcon className="side-bar-icons" />}
          >
            <Link to="/"> Home</Link>
          </MenuItem>
          <MenuItem
            className="hover-effect"
            icon={<Dashboard className="side-bar-icons" />}
          >
            <Link to="/dashboard">Dash Board</Link>
          </MenuItem>
          {/* <SubMenu
            className="hover-effect"
            label="Blogs"
            icon={<MenuBookIcon className="side-bar-icons" />}
          >
            <Link to="/dashboard/cse">
              <MenuItem>Computer Science</MenuItem>
            </Link>
          </SubMenu> */}
          <SubMenu label="blogs" icon={<MenuBookIcon />}>
            <SubMenu label="Branch">
              <Link to="/dashboard/cse">
                <MenuItem>Computer Science</MenuItem>
              </Link>
              <Link>
                <MenuItem>Mechanical</MenuItem>
              </Link>
            </SubMenu>
          </SubMenu>
          <MenuItem
            className="hover-effect"
            icon={<AccountCircleIcon className="side-bar-icons" />}
          >
            Account
          </MenuItem>
          <MenuItem
            className="hover-effect"
            icon={<LogoutRoundedIcon className="side-bar-icons" />}
          >
            <Link>Logout</Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      {/* <section className="upper-bar">
      <figure className="logo-logoImg">
            <img src="/icons8-book-96.png" alt="" width="30px" />
            <span>STUDY SYNC</span>
          </figure>
          <ul className="topics-scroll">
            <li>Java</li>
            <li>C++</li>
            <li>Python</li>
            <li>Data structures & algorithms</li>
            <li>Networking</li>
            <li>Microprocessor</li>
            <li>Compiler Design</li>
            <li>OOP's</li>
            <li>DBMS</li>
            <li>Mobile Computing</li>
            <li>SQL</li>
            <li>Cyber Security</li>
            <li>Data Warehousing</li>
            <li>Data Mining</li>
          </ul>
      </section> */}
      <Outlet />
    </div>
  );
}
