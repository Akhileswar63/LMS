import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'animate.css';

const AllDetailsPage = () => {
  const location = useLocation();
  const selectedEmployees = location.state?.selectedEmployees || [];
  const formData = location.state?.formData || {};
  const selectedCount = selectedEmployees.length;

  return (
    <div style={containerStyle}>
      <h1 style={{backgroundColor:"wheat", width:"80%", marginLeft:"18%"}}>Selected Employees</h1>
      <table style={{tableStyle, marginLeft:"18%"}}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Emp ID</th>
            <th style={tableHeaderStyle}>Emp Name</th>
            {/* <th style={tableHeaderStyle}>DOB</th> */}
            {/* <th style={tableHeaderStyle}>Gender</th> */}
            <th style={tableHeaderStyle}>Phone Number</th>
            <th style={tableHeaderStyle}>Email</th>
            {/* <th style={tableHeaderStyle}>PAN</th>
            <th style={tableHeaderStyle}>Adhar Number</th>
            <th style={tableHeaderStyle}>Address</th> */}
            <th style={tableHeaderStyle}>Experience</th>
            <th style={tableHeaderStyle}>Qualification</th>
            <th style={tableHeaderStyle}>Skill</th>
            <th style={tableHeaderStyle}>Designation</th>
            {/* <th style={tableHeaderStyle}>Blood Group</th> */}
            <th style={tableHeaderStyle}>Date of Joining</th>
            {/* <th style={tableHeaderStyle}>CTC</th>
            <th style={tableHeaderStyle}>Account Number</th>
            <th style={tableHeaderStyle}>IFSC Code</th>
            <th style={tableHeaderStyle}>Branch</th>
            <th style={tableHeaderStyle}>Social ID</th> */}
            {/* <th style={tableHeaderStyle}>Image</th> */}
          </tr>
        </thead>
        <tbody>
          {selectedEmployees.map((employee, index) => (
            <tr key={employee.employeeId} style={index % 2 === 0 ? tableRowOddStyle : tableRowEvenStyle}>
              <td style={tableCellStyle}>{employee.id}</td>
              <td style={tableCellStyle}>{employee.employeeName}</td>
              {/* <td style={tableCellStyle}>{employee.dob}</td> */}
              {/* <td style={tableCellStyle}>{employee.gender}</td> */}
              <td style={tableCellStyle}>{employee.phoneNumber}</td>
              <td style={tableCellStyle}>{employee.email}</td>
              {/* <td style={tableCellStyle}>{employee.pan}</td>
              <td style={tableCellStyle}>{employee.adharNumber}</td>
              <td style={tableCellStyle}>{employee.address}</td> */}
              <td style={tableCellStyle}>{employee.experience}</td>
              <td style={tableCellStyle}>{employee.qualification}</td>
              <td style={tableCellStyle}>{employee.skill}</td>
              <td style={tableCellStyle}>{employee.designation}</td>
              {/* <td style={tableCellStyle}>{employee.bloodGroup}</td> */}
              <td style={tableCellStyle}>{employee.dateofJoining}</td>
              {/* <td style={tableCellStyle}>{employee.ctc}</td>
              <td style={tableCellStyle}>{employee.accountNumber}</td>
              <td style={tableCellStyle}>{employee.ifscCode}</td>
              <td style={tableCellStyle}>{employee.branch}</td>
              <td style={tableCellStyle}>{employee.socialId}</td> */}
              <td style={tableCellStyle}>
                {employee.image && (
                  <img 
                    src={`data:image/png;base64,${employee.image}`} 
                    alt="Employee" 
                    width="50" 
                    height="50" 
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{marginLeft:"1000px"}}>
        <Link to="../employe-slot">
          <button type="button" style={{ marginLeft: "4px", backgroundColor: '#4CAF50', padding: '3px', width: '90px', borderRadius: '5px', color: 'azure' }}>View SlotIds</button>
        </Link>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
 
  padding: '0px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
  border: '5px solid #ddd', 
};

const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

const tableCellStyle = {
  border: '2px solid #ddd',
 
};

const tableRowOddStyle = {
  backgroundColor: '#f5f5f5',
};

const tableRowEvenStyle = {};

export default AllDetailsPage;