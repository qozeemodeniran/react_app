import React, {
  useState,
  useEffect
} from 'react';

import AddDeleteTableRows from './add-delete-table-rows/AddDeleteTableRows';

import Axios from 'axios';

import './App.css';

function App() {
  const [studentList,setStudentList]=useState([]);

  useEffect(()=>{
    Axios.get("http://localhost/IT7131_Project/react_app/app1/server.php").then((data)=>{
    setStudentList(data.data)
    });
  },[])

  return (
    <div className="App">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>

            {studentList.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddDeleteTableRows />
    </div>
  );
}

export default App;
