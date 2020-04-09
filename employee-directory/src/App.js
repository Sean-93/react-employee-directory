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
  return (
    <div className="App">
      <div className="row justify-content-center">
        <div className="">
          <Employee employeesList={employees} />
        </div>
      </div>
    </div>
  );
}

export default App;
