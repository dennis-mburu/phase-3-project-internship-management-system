import React from "react";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";


function Interns (){
    
    const[interns, setInterns] = useState([])


    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[department, setDepartment] = useState("cyber-security")

    useEffect(() => {
    
        fetch("http://localhost:9292/interns")
    
        .then(res => res.json())
        .then(data => {
          setInterns(data)
        })
      },[])




      function handleSubmit(e){
        e.preventDefault();
      }
  

    return (
        <div>
            <div>
                <h4>Intern Enrollment Form</h4>
            </div>
            <div>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    New Intern's Name:
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Enter Intern's Name Here..."
                        onChange={(e) => setName(e.target.value)}
                    />
                </label><br></br>

                <label>
                    New Intern's Email:
                    <input 
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Enter Intern's Email Here..."
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label><br></br>

                <label>
                    Select Intern's Department:
                    <select
                        name="Department"
                        value={department}
                        onChange={(e)=> setDepartment(e.target.value)}
                    >
                        <option value="cyber-security">cyber-security</option>
                        <option value="Networking">Networking</option>    
                        <option value="cloud-computing">cloud-computing</option>    
                        <option value="Web development">Web development</option>
                        <option value="Front End Designer">Front End Designer</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>

                    </select>    
                </label><br></br>
                
                <p><em>Intern's Supervisor will be randomly selected depending on their Availability</em><br></br></p>

                <button type="submit">Add New Intern</button>
            </form>

            <div>
                <h4>Below are the Details of all the Currently Enrolled Interns</h4>
            </div>
            </div>
            <div>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>Intern's Name</th>
          <th>Intern's Email</th>
          <th>Intern's Department</th>
          <th>Supervisor's name</th>
        </tr>
      </thead>
      <tbody>
        {interns.map(intern => <tr key={intern.id}>
                <td>{intern.id}</td>
                <td>{intern.name}</td>
                <td>{intern.email}</td>
                <td>{intern.department.specification}</td>
                <td>{intern.supervisor.name}</td>
            </tr>)}
      </tbody>
    </Table>

            </div>
        </div>
    )
}

export default Interns;