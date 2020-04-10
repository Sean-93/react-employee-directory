import React, {useState} from "react";
import "./App.css";
import Employee from "./components/employee";
const employeesList = [
  {
    name: "Jim",
    role: "Manager",
    education: "UofA"

  },
  {
    name: "Jennifer",
    role: "Engineer",
    education: "ASU"

  },
  {
    name: "Mark",
    role: "Engineer",
    education: "UofA"

  },
  {
    name: "Patricia",
    role: "Developer",
    education: "NAU"

  },
  {
    name: "Tom",
    role: "Intern",
    education: "ASU"

  },
]

function App() {
  const [employees, setEmployees] = useState(employeesList);
  function ActionLink(e) {
    // e.preventDefault();
    let empList = employees;

    empList.sort((a, b) => {
      if(a[e] < b[e]) {
        return -1;
      }
      if(a[e] > b[e]) {
        return 1;
      }
      return 0;
      
    });

    
    console.log(e);
    console.log("sorted", empList);
    setEmployees(empList);

  }
  return (
    <div className="App">
      <div className="row justify-content-center">
        <div className="">
          <Employee employeesList={employees} ActionLink={ActionLink}/>
        </div>
      </div>
    </div>
  );
}

export default App;
