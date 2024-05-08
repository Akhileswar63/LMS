import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'animate.css';
import * as XLSX from 'xlsx';

const Employslot = () => {
  const [slotIds, setSlotIds] = useState([]);
  const [selectedSlotId, setSelectedSlotId] = useState('');
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [formData, setFormData] = useState({});
  const [selectedEmployeesCount, setSelectedEmployeesCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8086/api/addslots/getAll')
      .then(response => {
        setSlotIds(response.data.map(slot => slot.id));
      })
      .catch(error => {
        console.error('Error fetching slot IDs:', error);
      });
  }, []);

  const handleSlotSelection = (slotId) => {
    setSelectedSlotId(slotId);
    axios.get(`http://localhost:1212/api/addslots/GetAllEmployeeDetails/${slotId}`)
      .then(response => {
        setEmployeeDetails(response.data);
        setSelectedEmployeesCount(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching employee details:', error);
      });
    axios.get(`http://localhost:1212/api/addslots/GetSlotDetails/${slotId}`)
      .then(response => {
        const { courseName, startDate, endDate, duration, trainerName } = response.data;
        setFormData({
          courseName,
          startDate,
          endDate,
          duration,
          trainerName
        });

        setEmployeeDetails(employeeDetails);
        setSelectedEmployeesCount(selectedEmployeesCount);
      })
      .catch(error => {
        console.error('Error fetching form data:', error);
      });
  };

  const handleDeleteEmployee = (employeeId) => {
    const updatedEmployees = employeeDetails.filter(employee => employee.employeeID !== employeeId);
    setEmployeeDetails(updatedEmployees);
    setSelectedEmployeesCount(updatedEmployees.length);
  };

  const handleDownload = () => {
    const data = [
      ['Selected Employees Count', selectedEmployeesCount],
      ['Trainer Name', formData.trainerName],
      ['Course Name', formData.courseName],
      ['Start Date', formData.startDate],
      ['End Date', formData.endDate],
      ['Duration', formData.duration],
      ['Employee ID', 'Employee Name', 'Phone Number', 'Email', 'Experience', 'Qualification', 'Skill', 'Designation', 'Date of Joining', 'CTC', 'Branch'],
      ...employeeDetails.map(employee => [employee.employeeId, employee.employeeName, employee.phoneNumber, employee.email, employee.experience, employee.qualification, employee.skill, employee.designation, employee.dateofJoining, employee.ctc, employee.branch])
    ];
   

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Employee Details');
    XLSX.writeFile(wb, 'employee_details.xlsx');
  }

  return (
    <div>
      <h2 class="animate__animated animate__fadeInUpBig" style={{backgroundColor:"wheat", textAlign:"center"}}>Select Slot ID:</h2>
      <select 
            value={selectedSlotId} 
           onChange={(e) => handleSlotSelection(e.target.value)}
          style={{ backgroundColor: 'black', color: 'white' ,padding:"10px"}}
        >
        <option value="">Select a Slot ID</option>
        {slotIds.map(slotId => (
          <option key={slotId} value={slotId}>{slotId}</option>
         ))}
        </select>

      <h2 class="animate__animated animate__fadeInUpBig" style={{backgroundColor:"wheat", textAlign:"center"}}>Slot Details:</h2>
 
      <p style={{ fontWeight: 'bold' }}>Trainer Name: {formData.trainerName}</p>
      <p style={{ fontWeight: 'bold' }}>Course Name: {formData.courseName}</p>
      <p style={{ fontWeight: 'bold' }}>Start Date: {formData.startDate}</p>
      <p style={{ fontWeight: 'bold' }}>End Date: {formData.endDate}</p>
      <p style={{ fontWeight: 'bold' }}>Duration: {formData.duration}</p>

      <h2 class="animate__animated animate__fadeInUpBig" style={{backgroundColor:"wheat", textAlign:"center"}}>Employee Details for Slot ID: {selectedSlotId}</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ padding: '6px', border: '1px solid #dddddd', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Employee ID</th>
            <th style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Employee Name</th>
            <th style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Phone Number</th>
            <th style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Email</th>
            <th style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Experience</th>
            <th style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Qualification</th>
            <th style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Skill</th>
            <th style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Designation</th>
            <th style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Date of Joining</th>
            <th style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left', backgroundColor: '#f2f2f2' }}>CTC</th>
            <th style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Branch</th>
        
          </tr>
        </thead>
        <tbody>
          {employeeDetails.map(employee => (
            <tr key={employee.employeeID}>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>{employee.employeeId}</td>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>{employee.employeeName}</td>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>{employee.phoneNumber}</td>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>{employee.email}</td>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>{employee.experience}</td>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>{employee.qualification}</td>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>{employee.skill}</td>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>{employee.designation}</td>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>{employee.dateofJoining}</td>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>{employee.ctc}</td>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>{employee.branch}</td>
              <td style={{ padding: '10px', border: '1px solid #dddddd', textAlign: 'left' }}>
           
 
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginLeft:"1100px" }}>

        <Link to="../Tranier">
          <button style={{ marginLeft: "10px", padding: ' 8px', width:"80px ",fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Back</button>
        </Link>
        <button style={{ marginLeft: "10px", padding: ' 8px', width:"90px ",fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }} onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default Employslot;
