import React from "react";

// items.sort(function(a, b) {
//   let nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   let nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });

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
    
    function ActionLink(e) {
        // e.preventDefault();
        let employeesList = props.employeesList;

        employeesList.sort((a, b) => {
          if(a[e] < b[e]) {
            return -1;
          }
          if(a[e] > b[e]) {
            return 1;
          }
          return 0;
          
        });

        
        console.log(e);
        console.log("sorted", employeesList)

      }

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