import React, {useState} from "react";

export default function Employee(props) {
  // const [employeesList, setEmployeesList] = useState(props.employeesList);
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
    
  function ActionLink (key) {
    props.ActionLink(key);
  }
console.log("employee Render");
  return (
    <div>
      <div className="container-fluid">
        <h1>Employee Directory</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th className="sort-index" scope="col">#</th>
              <th className="sort-name" scope="col"><button onClick={()=>{ActionLink("name");}}>Name</button></th>
              <th className="sort-role"scope="col"><button onClick={()=>{ActionLink("role");}}>Role</button></th>
              <th className="sort-education"scope="col"><button onClick={()=>{ActionLink("education");}}>Education</button></th>
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