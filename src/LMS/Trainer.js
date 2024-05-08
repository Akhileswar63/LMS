function Trainer(props) {
   

    return (
        <tr>
            <td>
                <input 
                    type="checkbox" 
                    id={`trainer-${props.id}`} 
                    className="checkbox-input" 
                    checked={props.checked}  // Use checked prop to determine checkbox state
                    onChange={() => props.handleCheckboxChange(props.id)}  // Handle checkbox change
                />
                <label htmlFor={`trainer-${props.id}`} className="checkbox-label" />
            </td>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.email}</td>
            <td>{props.experience}</td>
            <td>{props.qualification}</td>
            <td>{props.skill}</td>
            <td>{props.designation}</td>
            <td>{props.dateofJoining}</td>
            <td>{props.ctc}</td>
            <td>{props.branch}</td>
           
        </tr>
    );
}

export default Trainer;
