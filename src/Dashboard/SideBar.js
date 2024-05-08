import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import CheckIcon from "@mui/icons-material/Check";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";
import AlarmOffIcon from "@mui/icons-material/AlarmOff";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { ClassNames } from "@emotion/react";
import { Link } from "react-router-dom";
const drawerWidth = 220;

const SideBar = ({ handleSelect }) => {
  const sidetop = ["attendance", "Salary", "Send email", "Drafts"];

  const sidebottom = ["Shift", "Trash", "Spam"];

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  const handleSelectValue = (e) => {
    handleSelect = e;
    console.log(handleSelect);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgb(15, 80, 155)",
            color: "White",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <ApartmentOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon style={{ color: "white" }}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="LMS" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link
                  to="/trainer-list"
                  style={{ color: "white", textDecoration: "none", marginBottom: "10px" }}
                >
                  {" "}
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "white" }}>
                      <EventAvailableIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Slot" />
                  </ListItemButton>
                </Link>
                <Link to="/add-topic"
                style={{ color: "white", textDecoration: "none" }}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "white" }}>
                    <EventBusyIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Course" />
                </ListItemButton>
                </Link>
                <Link to="/add-task"
                style={{ color: "white", textDecoration: "none" }}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "white" }}>
                    <AlarmOffIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Task" />
                </ListItemButton>
                </Link>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "white" }}>
                    <AlarmOffIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Test" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <Divider style={{ backgroundColor: "white", color: "white" }} />
          <List>
            <Link
              to="/create-user"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <PersonAddAltIcon />
                </ListItemIcon>
                <ListItemText primary="Create User" />
              </ListItemButton>
            </Link>
            <Link
              to="/shift-details"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <PublishedWithChangesIcon />
                </ListItemIcon>
                <ListItemText primary="Shift Management" />
              </ListItemButton>
            </Link>
            <Link
              to="salary"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <CurrencyRupeeOutlinedIcon></CurrencyRupeeOutlinedIcon>
                </ListItemIcon>
                <ListItemText primary="Salary" />
              </ListItemButton>
            </Link>
            <ListItemButton /*onClick={handleClick}*/>
              <ListItemIcon style={{ color: "white" }}>
                <RequestPageOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Pay-Slip" />
              {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            </ListItemButton>
            <Collapse in={true} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "white" }}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Monthly" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "white" }}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Yearly" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default SideBar;
