import './Employee.css'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faHome, faBook, faUser, faCalendarAlt, faUserCheck, faUserTimes, faEnvelope, faMoneyBillAlt, faClock, faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Assets/Logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";

const Employee = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [trainingsCount, setTrainingsCount] = useState(0);
  const [tasksCount, setTasksCount] = useState(0);
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [requestsCount, setRequestsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [isAttendanceShown, setIsAttendanceShown] = useState(false);
  const [isHestoryShown,setIsHestoryShown]=useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // Fetch data every minute
    return () => clearInterval(interval);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleAttendance = (e) => {
    e.preventDefault(); // Prevent default behavior of anchor tag
    setIsAttendanceShown(!isAttendanceShown);
  };
  const toggleHestory = () => {
    setIsHestoryShown(!isHestoryShown);
  };
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

  return (
    <div>
      <div className="employee_navbar2">
        <div className="employee_navbar__logo2">
          <img src={Logo} alt="Company Logo" />
          <span>Welcome Anarghya Communications</span>
        </div>
        <div className="employee_time1">
          <span>{dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}</span>
        </div>
        <label htmlFor="toggleSidebar" className="employee_container1">
          <input type="checkbox" id="toggleSidebar" checked={sidebarVisible} onChange={toggleSidebar} />
          <svg className="bell-regular" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path>
          </svg>
          <svg className="bell-solid" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path>
          </svg>
        </label>
        <button className="employee_Btn1">
          <div className="employee_sign1">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div className="employee_text1"></div>
        </button>
      </div>

      <nav className={sidebarVisible ? 'employee_sidebar visible' : 'employee_sidebar'}>
       
        <al>
          <li><a href=''><FontAwesomeIcon icon={faHome} /> Home</a></li>
          <li><a href=''><FontAwesomeIcon icon={faUser} /> Profile</a></li>
          <li><a href=''><FontAwesomeIcon icon={faBook} /> Trainings</a></li>
          <li><a href='view-task'><FontAwesomeIcon icon={faPlus} /> Tasks</a></li>
          <li>
            <a href='' className='feat-btn' onClick={toggleAttendance}>
              <FontAwesomeIcon icon={faCalendarAlt} /> Attendance
              <span>
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </a>
            <al className={`feat-show ${isAttendanceShown ? 'show' : ''}`}>
              <li><a href=''><FontAwesomeIcon icon={faCalendarAlt} /> View Attendance</a></li>
              <li><a href=''><FontAwesomeIcon icon={faUserCheck} /> Present Days</a></li>
              <li><a href=''><FontAwesomeIcon icon={faUserTimes} /> Absent Days</a></li>
              <li><a href=''><FontAwesomeIcon icon={faEnvelope} /> Requests</a></li>
            </al>
          </li>
          <li><a href=''><FontAwesomeIcon icon={faMoneyBillAlt} /> Payroll</a></li>
          <li><a href=''><FontAwesomeIcon icon={faClock} /> Assessment</a></li>
          <li><a href=''><FontAwesomeIcon icon={faClock} /> Projects</a></li>
          <li>
            <a href='#' className='feat-btn' onClick={toggleHestory}>
              <FontAwesomeIcon icon={faUser} /> Hestory
              <span>
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </a>
            <al className={`feat-show ${isHestoryShown ? 'show' : ''}`}>
              <li><a href='#'><FontAwesomeIcon icon={faUser} /> Login Hestory</a></li>
             
            </al>
          </li>
          <li><a href=''><FontAwesomeIcon icon={faSignOutAlt} /> Signout</a></li>
        </al>
      
</nav>


      <div className='employee_graphs1'> 
        <div className='employee_main-cards1' id='mainCards'>
          <div className='employee_card1'>
            <div className='employee_card-inner1'>
              <h3>Trainings</h3>
            </div>
            <h1>{trainingsCount}</h1>
          </div>
          <div className='employee_card1'>
            <div className='employee_card-inner1'>
              <h3>Tasks</h3>
            </div>
            <h1>{tasksCount}</h1>
          </div>
          <div className='employee_card1'>
            <div className='employee_card-inner1'>
              <h3>Attendance</h3>
            </div>
            <h1>{attendanceCount}</h1>
          </div>
          <div className='employee_card1'>
            <div className='employee_card-inner1'>
              <h3>Requests</h3>
            </div>
            <h1>{requestsCount}</h1>
          </div>
          <div className='employee_card1'>
            <div className='employee_card-inner1'>
              <h3>Projects</h3>
            </div>
            <h1>{projectsCount}</h1>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Employee;
