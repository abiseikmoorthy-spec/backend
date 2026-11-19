import React from 'react'

const Employee = () => {

    let empname = "priya";
    let emid ="EMP101";
    let designation = "react developer";
    let salary ="10,000"
    let company = "Tcs";

  return (
    <div>
        <h1>Employee details</h1>

        <p> Employee ID: (empId)</p>
        <p>name:{empName} </p>
        <p>Designation: {designation}</p>
        <p>Salary: {Salary}</p>
        <p>Company :{Company}</p>
        
        
    </div>
  )
}

export default Employee;