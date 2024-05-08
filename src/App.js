
// import './App.css';
// import LandingPage from './Landing_page/LandingPage'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';
// import Dashboard from'./Admin_Dashboard/Dashboard'
// import Employee from './Employee_Dashord/Employee';
import TrainerList from './LMS/TrainerList';
import Addslot from './LMS/AddSlot';
import AddTopic from './LMS/AddTopic';
import AddTask from './LMS/AddTask';
// import ViewTask from './LMS/ViewTask';
// import StartTask from './LMS/StartTask';
import SideBar from './Dashboard/SideBar';
import NavBar from './Dashboard/NavBar';
import AllDetailsPage from './LMS/AllDetailsPage';
import Employslot from './LMS/Employslot';
import ViewAllTask from "./LMS/ViewAllTask";


function App() {
  return (
    <BrowserRouter>
    <SideBar />
    <NavBar />
    <Routes>
    <Route path='/trainer-list' element={<TrainerList/>}/>
    <Route path='/AddSlot' element={<Addslot/>}/>
    <Route path='/all-details' element={<AllDetailsPage/>}/>
    <Route path='/employe-slot' element={<Employslot/>}/>
    <Route path='/add-topic' element={<AddTopic/>}/>
    <Route path='/add-task' element={<AddTask/>}/>
    <Route path='/view-all-task' element={<ViewAllTask/>}/>
    </Routes>
    </BrowserRouter>
    
    // <BrowserRouter>
    // <Routes>
    //   {/* <Route path='/' element={<LandingPage/>}/> */}
    //   <Route path='/' element={<Dashboard/>}/>
    //   <Route path='/start-task' element={<StartTask/>}/>
    //   <Route path='/view-task' element={<ViewTask/>}/>
    //    <Route path='/employee' element={<Employee/>}/>


    // </Routes>
    // </BrowserRouter>
 
  );
}

export default App;
