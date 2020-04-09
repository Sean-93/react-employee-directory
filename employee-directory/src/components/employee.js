import React from "react";

export default function Employee(props) {
  const employee = props.employeesList.map((item, index) => {
      return (
        <tr>
          <th scope="row">{index+1}</th>
          <td>{item.name}</td>
          <td>{item.role}</td>
          <td>{item.education}</td>
        </tr>
      );
    });
    
  
  return (
    <div>
      <div className="container-fluid">
        <h1>Employee Directory</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Education</th>
            </tr>
          </thead>
          <tbody>
          {employee}
          </tbody>
        </table>
      </div>
    </div>
  );
}
