import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './TrainerViewTask.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TrainerViewTask = ({ initialDescription }) => {
    const [description, setDescription] =   (initialDescription || '');
    const [progress, setProgress] = useState(30);
 
    useEffect(() => {
        // Fetch data from the backend when the component mounts
        axios.get('http://your-backend-url/api/description')
            .then(response => {
                setDescription(response.data.description); // Update state with the fetched description
                setProgress(response.data.progress);
            })
            .catch(error => {
                console.error('Error fetching description:', error);
            });
    }, []);

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleStatusChange = (status) => {
        // Send a request to the backend to update the status
        axios.put('http://your-backend-url/api/task/status', { status })
            .then(response => {
                console.log('Status updated successfully:', response.data);
                // Optionally, you can fetch the updated status again from the backend and update the UI
            })
            .catch(error => {
                console.error('Error updating status:', error);
            });
    };
    return (
        <div className="container flex-direction">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="text-center">
                        <h3 className="View-h3">View</h3>
                    </div>
                    <div className="View-Descriptionbox  mt-5" style={{ width:'60%', border: 'solid 2px', borderRadius: '6px' }}>
                        <textarea
                            className="description-input form-control"
                            style={{ height: '200px', width: '100%', resize: 'none' }}
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </div>
                    <div className=" d-flex justify-content-start align-items-start">
                        <h5 className="View-h5-status mr-4 ">Description:</h5>
                    </div>

                    <div className="d-flex justify-content-end align-items-center mb-5 ml-7" style={{marginTop:'-240px'}}>
                        <div style={{ width: '100px', height: '100px' }}>
                            <CircularProgressbar
                                value={progress}
                                text={`${progress}%`}
                            />
                        </div>
                    </div>
                    <div className=" d-flex justify-content-end align-items-center">
                        <h5 className="View-h5-status mr-3 ">Status:</h5>
                    </div>
                    <div className="d-flex justify-content-end align-items-end">
                        <button type="button" className="btn btn-outline-success me-4 mt-5" onClick={() => handleStatusChange('completed')}>Completed</button>
                        <button type="button" className="btn btn-outline-danger" onClick={() => handleStatusChange('not-completed')}>Not Completed</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TrainerViewTask;
