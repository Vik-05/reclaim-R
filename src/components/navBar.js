import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Page from "../pages/page";
import Lost from "../pages/lost";
import Found from "../pages/found";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Login } from "@mui/icons-material";

export default function NavBar() {
  const { collapseSidebar } = useProSidebar();
  const handlechange  = event =>{ } 
  return (
   <div>

    <div className="container" style={({width:"100rem"},{alignItems:"start"})}>
      <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={({ height: "100vh" }, {marginLeft:"0%"})}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}><Link onClick={handlechange} to="/Found">Found</Link></MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}><Link onClick={handlechange} to="/Home">Home</Link></MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}><Link onClick={handlechange} to="/Lost">Lost</Link></MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}><Link onClick={handlechange} to="/Sell">Sell</Link></MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}><Link onClick={handlechange} to="/Donate">Donate</Link></MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}><Link onClick={handlechange} to="/Found">Found</Link></MenuItem>
        </Menu>
      </Sidebar>
      {/* <main  style={{width: "100%"}}>
        <h1 style={{ color: "white" }}>
          React-Pro-Sidebar
        </h1>
      </main> */}
      </div>
      
    </div>
   </div>
  );
}
