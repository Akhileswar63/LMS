import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import './ViewTask.css'

 function ViewTask() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tasks, setTasks] = useState([]);
  const [trainerName, setTrainerName] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8085/task/get/1`);
        setTrainerName(response.data.trainerName);
      } catch (error) {
        console.error('Error fetching trainer data:', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8085/task/allTask');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleViewFiles = async (id) => {
    try {

      const response = await axios.get(`http://localhost:8085/task/allTask/${id}`, { responseType: 'blob' });

      const contentType = response.headers['content-type'];
      const file = new Blob([response.data], { type: contentType });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (error) {
      console.error('Error handling view files:', error);
    }
  };


  useEffect(() => {
    const getCurrentDateTime = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      const formattedTime = `${hours}:${minutes}`;
      setDate(formattedDate);
      setTime(formattedTime);
    };
    getCurrentDateTime();
  }, []);


  const handleClick = (event) => {
    const result = window.confirm(`Are you sure you want to start assessment?`);

    if (result) {
      console.log('OK');
    } else {
      console.log('Cancel');
      event.preventDefault();
    }
  };

  return (
    <div className='container-fluid'>
      <div className='container1'>
        <div className='main1'>
          <div className='header1'>
            <h3>Task</h3>
          </div>

          <div className='side1'>
            <div className="trainer1">
              <label htmlFor="trainer">Trainer Name:</label>
              <input style={{ fontSize: "20px" }} type="text" readOnly id="trainer" placeholder="Trainer name" value={trainerName} />
            </div>

            <div className='current1'>
              <div className="date1">
                <label htmlFor="dateInput">Date:</label>
                <input type="date" readOnly id="dateInput" placeholder="Date" value={date} />
              </div>

              <div className="time1">
                <label htmlFor="timeInput">Time:</label>
                <input type="time" readOnly id="timeInput" placeholder="Time" value={time} />
              </div>
            </div>
          </div>

        </div>

        <div className='table-responsive'>
          <div className='tabular1'>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Task Name</th>
                  <th scope="col">Task Description</th>
                  <th scope="col">Ref. File</th>
                  <th scope="col">Start Date & time</th>
                  <th scope="col">End Date & time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody> {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.taskName}</td>
                  <td>{task.taskDescription}</td>
                  <td><button onClick={() => handleViewFiles(task.id)} type="button" className="bttn">view</button></td>
                  <td>{`${task.startDate}- ${task.startTime}`}</td>
                  <td>{`${task.endDate}- ${task.endTime}`}</td>
                  <td><button className="bttn"><Link className="link" to="/start-task" onClick={handleClick}>start</Link></button></td>
                </tr>))}
              </tbody>
            </table>

          </div>
        </div>

      </div>
    </div>

  );
}
export default ViewTask;