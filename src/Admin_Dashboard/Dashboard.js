import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Logo from '../Assets/Logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, PieChart, Pie } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faHome, faBook, faUsers, faCalendarAlt, faUser, faClock, faMoneyBillAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faTasks, faClipboardCheck, faUserFriends, faChartBar, faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faUserCheck, faUserTimes, faClipboardList, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
  const [dateTime, setDateTime] = useState(new Date());
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const [isLmsShown, setIsLmsShown] = useState(false);
  const [isAttendanceShown, setIsAttendanceShown] = useState(false);
  const [isUserShown, setIsUserShown] = useState(false);
  const [isHestoryShown,setIsHestoryShown]=useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
      // Fetch and update counts from backend APIs
      // For example:
      // fetchTasksCount().then(count => setTasksCount(count));
      // fetchMeetingsCount().then(count => setMeetingsCount(count));
      // fetchBirthdaysCount().then(count => setBirthdaysCount(count));
      // fetchProjectManagerCount().then(count => setProjectManagerCount(count));
      // fetchOnLeaveCount().then(count => setOnLeaveCount(count));
    }, 60000); // Update counts every minute

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  const [trainingsCount, setTrainingsCount] = useState(0);
  const [tasksCount, setTasksCount] = useState(0);
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [requestsCount, setRequestsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleLms = () => {
    setIsLmsShown(!isLmsShown);
  };

  const toggleAttendance = () => {
    setIsAttendanceShown(!isAttendanceShown);
  };

  const toggleUser = () => {
    setIsUserShown(!isUserShown);
  };
  const toggleHestory = () => {
    setIsHestoryShown(!isHestoryShown);
  };
  const data01 = [
    { "name": "Group A", "value": 400 },
    { "name": "Group B", "value": 300 },
    { "name": "Group C", "value": 300 },
    { "name": "Group D", "value": 200 },
    { "name": "Group E", "value": 278 },
    { "name": "Group F", "value": 189 }
  ];

  const data02 = [
    { "name": "Group A", "value": 2400 },
    { "name": "Group B", "value": 4567 },
    { "name": "Group C", "value": 1398 },
    { "name": "Group D", "value": 9800 },
    { "name": "Group E", "value": 3908 },
    { "name": "Group F", "value": 4800 }
  ];

  const data = [
    { "name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400 },
    { "name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210 },
    { "name": "Page C", "uv": 2000, "pv": 9800, "amt": 2290 },
    { "name": "Page D", "uv": 2780, "pv": 3908, "amt": 2000 },
    { "name": "Page E", "uv": 1890, "pv": 4800, "amt": 2181 },
    { "name": "Page F", "uv": 2390, "pv": 3800, "amt": 2500 },
    { "name": "Page G", "uv": 3490, "pv": 4300, "amt": 2100 }
  ];
  const fetchData = () => {
    // Mock data fetch (replace with actual API calls)
    const mockData = {
      trainings: Math.floor(Math.random() * 1000),
      tasks: Math.floor(Math.random() * 1000),
      attendance: Math.floor(Math.random() * 1000),
      requests: Math.floor(Math.random() * 1000),
      projects: Math.floor(Math.random() * 1000)
    };

    setTrainingsCount(mockData.trainings);
    setTasksCount(mockData.tasks);
    setAttendanceCount(mockData.attendance);
    setRequestsCount(mockData.requests);
    setProjectsCount(mockData.projects);
  };
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // Fetch data every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='main1'>
      <div className="dashbord_navbar1">
        <div className="dashbord_navbar__logo1">
          <img src={Logo} alt="Company Logo" />
          <span>Welcome Anarghya Communications</span>
        </div>
        <div className="dashbord_time">
          <span>{dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}</span>
        </div>
        {/* Notification Bell */}
        <label className="dashbord_container">
          <input type="checkbox" checked="checked" />
          <svg className="bell-regular" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7z"></path>
          </svg>
          <svg className="bell-solid" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7z"></path>
          </svg>
        </label>
        {/* Logout Button */}
        <button className="dashbord_Btn">
          <div className="dashbord_sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div className="dashbord_text"></div>
        </button>
      </div>

      <nav className='dashbord_sidebar'>
       
        <al>
          <li><a href='#'><FontAwesomeIcon icon={faHome} /> Home</a></li>
          <li><a href='#'><FontAwesomeIcon icon={faUser} /> Profile</a></li>

          <li>
            <a href='#' className='feat-btn' onClick={toggleLms}>
              <FontAwesomeIcon icon={faBook} /> LMS
              <span>
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </a>
            <al className={`feat-show ${isLmsShown ? 'show' : ''}`}>
              <li> <a href='trainer-list'><FontAwesomeIcon icon={faPlus} />Create Slot</a></li>
              <li> <a href='add-topic'><FontAwesomeIcon icon={faPlus} />Create Course</a></li>
              <li> <a href='add-task'><FontAwesomeIcon icon={faPlus} />Create Task</a></li>
              <li> <a href='#'><FontAwesomeIcon icon={faPlus} />Create Test</a></li>
              <li><a href='#'><FontAwesomeIcon icon={faUserFriends} /> Assign</a></li>
              <li> <a href='#'><FontAwesomeIcon icon={faChartBar} />Report</a></li>
              <li> <a href='#'><FontAwesomeIcon icon={faCertificate} />Certification</a></li>
            </al>
          </li>
          <li>
            <a href='#' className='feat-btn' onClick={toggleAttendance}>
              <FontAwesomeIcon icon={faCalendarAlt} /> Attendance
              <span>
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </a>
            <al className={`feat-show ${isAttendanceShown ? 'show' : ''}`}>
              <li> <a href='#'><FontAwesomeIcon icon={faCalendarAlt} />Attendance</a></li>
              <li> <a href='#'><FontAwesomeIcon icon={faUserCheck} />Present Employee</a></li>
              <li> <a href='#'><FontAwesomeIcon icon={faUserTimes} />Absent Employee</a></li>
              <li><a href='#'><FontAwesomeIcon icon={faClipboardList} /> Leaves</a></li>
              <li><a href='#'><FontAwesomeIcon icon={faClock} /> Late Comers</a></li>
              <li> <a href='#'><FontAwesomeIcon icon={faEnvelope} />Requests</a></li>
            </al>
          </li>
          <li>
            <a href='#' className='feat-btn' onClick={toggleUser}>
              <FontAwesomeIcon icon={faUsers} /> User
              <span>
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </a>
            <al className={`feat-show ${isUserShown ? 'show' : ''}`}>
              <li><a href='#'><FontAwesomeIcon icon={faUser} /> Employee</a></li>
              <li><a href='#'><FontAwesomeIcon icon={faUserCheck} /> Employee Onboarding</a></li>
              <li><a href='#'><FontAwesomeIcon icon={faUserTimes} /> Employee Offboarding</a></li>
              <li><a href='#'><FontAwesomeIcon icon={faUser} /> Management</a></li>
            </al>
          </li>
          <li>
            <a href='#' className='feat-btn' onClick={toggleHestory}>
              <FontAwesomeIcon icon={faUser} /> Hestory
              <span>
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </a>
            <al className={`feat-show ${isHestoryShown ? 'show' : ''}`}>
              <li><a href='#'><FontAwesomeIcon icon={faUser} /> Login Hestory</a></li>
              <li><a href='#'><FontAwesomeIcon icon={faUserCheck} /> Login Activity</a></li>
             
            </al>
          </li>
          <li><a href='#'><FontAwesomeIcon icon={faClock} /> Assessment</a></li>
          <li><a href='#'><FontAwesomeIcon icon={faClock} /> Shift Management</a></li>
          <li><a href='#'><FontAwesomeIcon icon={faMoneyBillAlt} /> Payroll</a></li>
          <li><a href='#'><FontAwesomeIcon icon={faSignOutAlt} /> Signout</a></li>

     
        </al>
      </nav>

      <div className='dashbord_graphs'>
      <div className='dashbord_main-cards' id='mainCards'>
          <div className='dashbord_card'>
            <div className='dashbord_card-inner'>
              <h3>Trainings</h3>
            </div>
            <h1>{trainingsCount}</h1>
          </div>
          <div className='dashbord_card'>
            <div className='dashbord_card-inner'>
              <h3>Tasks</h3>
            </div>
            <h1>{tasksCount}</h1>
          </div>
          <div className='dashbord_card'>
            <div className='dashbord_card-inner'>
              <h3>Attendance</h3>
            </div>
            <h1>{attendanceCount}</h1>
          </div>
          <div className='dashbord_card'>
            <div className='dashbord_card-inner'>
              <h3>Requests</h3>
            </div>
            <h1>{requestsCount}</h1>
          </div>
          <div className='dashbord_card'>
            <div className='dashbord_card-inner'>
              <h3>Projects</h3>
            </div>
            <h1>{projectsCount}</h1>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: 'px' }}>
            <LineChart width={550} height={250} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 50 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div>
            <PieChart width={400} height={250}>
              <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
              <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
          </div>
        </div>
        <LineChart width={900} height={250} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}

export default Dashboard;
