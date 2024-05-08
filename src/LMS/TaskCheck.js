import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './TaskCheck.css'

const TaskCheck = () => {
    const [selectedOption, setSelectedOption] = useState('Option 1');

    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);


    useEffect(() => {
        // Fetch data from the backend when the component mounts
        axios.get('http://your-backend-url/api/tasks')
            .then(response => {
                setTasks(response.data); // Update state with the fetched tasks
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    useEffect(() => {
        // Filter tasks based on the selected option
        if (selectedOption === 'Select') {
            setFilteredTasks(tasks); // Show all tasks if 'Select' is chosen
        } else {
            const filtered = tasks.filter(task => task.status === selectedOption);
            setFilteredTasks(filtered);
        }
    }, [selectedOption, tasks]);

    const handleViewTask = (taskId) => {
        // Implement your logic for viewing a task here
        console.log("Viewing task with ID:", taskId);
    };
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (
        <>
            <div className="container">
                <div className="row "> 
                    <div className="col-md-8 offset-md-2">
                        <div className="ViewTask-Selection">
                            <center><h3 className="ViewTask-h3 mt-5">Task List</h3></center>
                            <select className="ViewTask-Select mt-5" value={selectedOption} onChange={handleOptionChange} >
                                <option className='ViewTask-option'>Select</option>
                                <option className='ViewTask-option' value="Processing">Processing</option>
                                <option className='ViewTask-option' value="Pending">Pending</option>
                                <option className='ViewTask-option' value="NotCompleted">NotCompleted</option>
                                <option className='ViewTask-option' value="Completed">Completed</option>
                            </select>
                        </div>
                        <div className="ViewTask-table mt-5">
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr.no</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.map((task, index) => (
                                        <tr key={task.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{task.id}</td>
                                            <td>{task.name}</td>
                                            <td><button className="btn btn-info" onClick={() => handleViewTask(task.id)}>View</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TaskCheck;
