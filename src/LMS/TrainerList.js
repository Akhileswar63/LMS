
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Trainer from './Trainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

function TrainerList() {
    const navigate = useNavigate(); 
    useEffect(() => {
        const dropdownElement = document.getElementById('courseDropdown');
        if (dropdownElement) {
            new bootstrap.Dropdown(dropdownElement);
        }
        fetchAllEntities(); 
    }, []);

    const [selectAll, setSelectAll] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});
    const [entities, setEntities] = useState([]);
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);


    const fetchAllEntities = () => {
        fetch('http://localhost:8086/api/employees/GetAllEmployeeDetails')
        // fetch('http://localhost:1212/api/employees//GetAllEmployeeDetails')
            .then(response => response.json())
            .then(data => setEntities(data))
            .catch(error => console.error('Error fetching entities:', error));
    };

    const fetchEntitiesBySkill = (skill) => {
        fetch(`http://localhost:8086/api/employees/search?skill=${skill}`)
        // fetch(`http://localhost:8081/employees/search?skill=${skill}`)
            .then(response => response.json())
            .then(data => setEntities(data))
            .catch(error => console.error('Error fetching entities by skill:', error));
    };

    const handleCheckboxChange = (id) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
    
    const handleSelectAllChange = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
    
        const newCheckedItems = {};
        for (const entity of entities) {
            newCheckedItems[entity.id] = newSelectAll; // Use entity.id instead of entity.employeeId
        }
        setCheckedItems(newCheckedItems);
    };
    

    const handleAddSlot = () => {
        const selectedEmployees = entities.filter(entity => checkedItems[entity.id]);
        setSelectedEmployees(selectedEmployees);
        navigate('/Addslot', { state: { selectedEmployees, selectedCount: selectedEmployees.length } });
       
          
    };

    const handleCourseSelection = (skill) => {
        fetchEntitiesBySkill(skill);
    };

    return (
        <>
           <div className="p-2 mb-2 bg-black text-white rounded" style={{ width: '80%', marginLeft:'18%', marginRight:'10%' }}>

                <h2 className="display-6" >Trainers</h2>
            </div>
            <div className="row mb-2" style={{marginLeft:'18%'}}>
                <div className="col">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="courseDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            Course Name
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="courseDropdown">
                            <li><button className="dropdown-item" onClick={() => handleCourseSelection('Java')}>Java</button></li>
                            <li><button className="dropdown-item" onClick={() => handleCourseSelection('Python')}>Python</button></li>
                            <li><button className="dropdown-item" onClick={() => handleCourseSelection('AWS')}>AWS</button></li>
                            <li><button className="dropdown-item" onClick={() => handleCourseSelection('Testing')}>Testing</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <table className="table" style={{marginLeft:'18%', width:'80%'}}>
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                id="select-all-checkbox"
                                checked={selectAll}
                                onChange={handleSelectAllChange}
                            />
                        </th>
                        <th style={tableHeaderStyle}>Emp ID</th>
            <th style={tableHeaderStyle}>Emp Name</th>
            {/* <th style={tableHeaderStyle}>Gender</th> */}
            <th style={tableHeaderStyle}>Phone Number</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Experience</th>
            <th style={tableHeaderStyle}>Qualification</th>
            <th style={tableHeaderStyle}>Skill</th>
            <th style={tableHeaderStyle}>Designation</th>
            <th style={tableHeaderStyle}>Date of Joining</th>
            
            {/* <th style={tableHeaderStyle}>Image</th> */}
         
                        {/* Add more headers if needed */}
                    </tr>
                </thead>
                <tbody>
                    {entities.map(entity => (
                        <Trainer 
                            key={entity.id}
                            id={entity.id}
                            name={entity.employeeName}
                            gender={entity.gender}
                            phoneNumber={entity.phoneNumber}
                            email={entity.email}
                            experience={entity.experience}
                            qualification={entity.qualification}
                            skill={entity.skill}
                            designation={entity.designation}
                            dateofJoining={entity.dateofJoining}
                            checked={checkedItems[entity.id] || false}
                            handleCheckboxChange={handleCheckboxChange}
                              image={entity.image} 
                        />
                    ))}
                </tbody>
            </table>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="select-all-checkbox-bottom"
                            className="form-check-input"
                            checked={selectAll}
                            onChange={handleSelectAllChange}
                        />
                        <label htmlFor="select-all-checkbox-bottom" className="form-check-label">Select All</label>
                    </div>
                </div>
                <div className="col-md-6 text-end">
                    {Object.values(checkedItems).includes(true) && (
                        <button className="btn btn-primary" onClick={handleAddSlot}> ADD Slot </button>
                    )}
                </div>
            
        </div>
        </>
    );
}
const tableHeaderStyle = {
  border: '3px solid #ddd',
  padding: '8px',
};

export default TrainerList;








