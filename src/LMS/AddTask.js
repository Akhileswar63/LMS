import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AddTask.css'; 

const AddTask = () => {
  const [refFilefile, setFile] = useState(null);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [taskNameError, setTaskNameError] = useState('');
  const [taskDescriptionError, setTaskDescriptionError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!refFile || !startDate || !endDate || !startTime || !endTime) {
      alert('Please fill in all required fields');
      return;
    }

    if (!/^\D+$/.test(taskName)) {
      setTaskNameError('Task Name must not contain numbers');
      return;
    } else {
      setTaskNameError('');
    }

    if (!/^\D+$/.test(taskDescription)) {
      setTaskDescriptionError('Task Description must not contain numbers');
      return;
    } else {
      setTaskDescriptionError('');
    }

    try {
      const formData = new FormData();
      formData.append('refFile', refFile);
      formData.append('taskName', taskName);
      formData.append('taskDescription', taskDescription);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);
      formData.append('startTime', startTime);
      formData.append('endTime', endTime);

      const response = await fetch('http://localhost:8085/task/save', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Report saved:', responseData);
      } else {
        console.error('Failed to save report:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving report:', error.message);
    }
  };

  return (
    <>
    <div className="col text-end " style={{marginRight:'150px'}} >
      <Link to="/view-all-task" className="btn btn-outline-secondary">All Tasks</Link>
    </div>
    <div className="container " style={{maxWidth:'1700px',marginLeft:'300px'}}>
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6">
    <div className="cards" id='add-task'>
      <div className="card-body">
  <h2 className="card-title "> Create a Task</h2>
  <form onSubmit={handleSubmit}>
    <div className="row mb-3">
      <div className="col">
        <label htmlFor="taskName" className="form-label">Task Name:</label>
        <input type="text" className="form-control" id="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Enter Task Name" />
        {taskNameError && <div className="error-message">{taskNameError}</div>}
      </div>
      <div className="col">
        <label htmlFor="file" className="form-label">Attach File:</label>
        <input type="file" className="form-control" id="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
    </div>
    <div className="row mb-3">
      <div className="col">
        <label htmlFor="startDate" className="form-label">Start Date:</label>
        <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div className="col">
        <label htmlFor="endDate" className="form-label">End Date:</label>
        <input type="date" className="form-control" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
    </div>
    <div className="row mb-3">
      <div className="col">
        <label htmlFor="startTime" className="form-label">Start Time:</label>
        <input type="time" className="form-control" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </div>
      <div className="col">
        <label htmlFor="endTime" className="form-label">End Time:</label>
        <input type="time" className="form-control" id="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </div>
    </div>
    <div className="text-center"> 
      <label htmlFor="taskDescription" className="form-label">Task Description:</label>
      <textarea className="form-control" id="taskDescription" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="Enter Task Description"></textarea>
      {taskDescriptionError && <div className="error-message">{taskDescriptionError}</div>}
    </div>
    <button type="submit" className="btn btn-primary mt-2">Create</button>
  </form>
  </div>
</div>
</div>

</div>
</div>

</>
  );
};

export default AddTask;
