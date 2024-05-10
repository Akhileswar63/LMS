import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddTopic.css';

function AddTopic() {
    const [formData, setFormData] = useState({
        trainerName: 'Akhil',
        topicName: '',
        startDate: '',
        startTime: '',
        endTime: '',
        topicDuration: '',
        video: null,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleFileChange = (e) => {
        const { id, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            const response = await axios.post(`http://localhost:8080/api/employees/add`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
            toast.success("Video created successfully!", {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <div className="container mt-2 " style={{maxWidth:'1600px'}}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <ToastContainer />
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Create Topic</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="trainerName" className="form-label">Trainer Name:</label>
                                            <input type="text" className="form-control" id="trainerName" placeholder="Trainer Name" onChange={handleChange} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="topicName" className="form-label">Topic Name:</label>
                                            <input type="text" className="form-control" id="topicName" placeholder="Topic Name" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="startDate" className="form-label">Date:</label>
                                            <input type="date" className="form-control" id="startDate" onChange={handleChange} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="startTime" className="form-label">Start Time:</label>
                                            <input type="time" className="form-control" id="startTime" onChange={handleChange} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="endTime" className="form-label">End Time:</label>
                                            <input type="time" className="form-control" id="endTime" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="topicDuration" className="form-label">Topic Duration:</label>
                                            <input type="text" className="form-control" id="topicDuration" placeholder="Topic Duration" onChange={handleChange} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="video" className="form-label">Video:</label>
                                            <input type="file" className="form-control" id="video" onChange={handleFileChange} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddTopic;
