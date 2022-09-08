import React from "react";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';



function Interns (){
    
    const[interns, setInterns] = useState([])


    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[department, setDepartment] = useState("1")

    useEffect(() => {
    
        fetch("http://localhost:9292/interns")
    
        .then(res => res.json())
        .then(data => {
          setInterns(data)
        })
      },[])

      function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:9292/interns", {

            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                department: parseInt(department),
            })
        })
        .then(res => res.json())
        .then (newIntern => {
            // setInterns([...interns, newIntern])
            console.log(newIntern)
        })
        setName('')
        setEmail('')
        setDepartment('1')
      }

      function handleDeleteClick(id){

        fetch(`http://localhost:9292/interns/${id}`, {
  
          method: "DELETE"
        })
        .then(res => res.json())
        .then((deletedIntern) => {
            const updatedInterns = interns.filter(intern => intern.id !== deletedIntern.id )
            setInterns(updatedInterns)
        } )
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
                        <option value="1">cyber-security</option>
                        <option value="2">Networking</option>    
                        <option value="3">cloud-computing</option>    
                        <option value="4">Web development</option>
                        <option value="5">Front End Designer</option>
                        <option value="6">Mobile App Development</option>
                        <option value="7">Data Science</option>
                        <option value="8">Artificial Intelligence</option>

                    </select>    
                </label><br></br>
                
                <p><em>- Intern's Supervisor will be randomly selected depending on their Availability</em></p>
                <p><em>- Refresh page to see details on the newly added intern</em><br></br></p>

                <Button variant="success" type="submit">Add new Intern</Button>

                {/* <button type="submit">Add New Intern</button> */}
            </form>

            <div>
                <h4>Details for the Currently Enrolled Interns</h4>
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
          {/* <th>Update Details</th> */}
          <th>Delete Intern</th>
        </tr>
      </thead>
      <tbody>
        {interns.map(intern => <tr key={intern.id}>
                <td>{intern.id}</td>
                <td>{intern.name}</td>
                <td>{intern.email}</td>
                <td>{intern.department.specification}</td>
                <td>{intern.supervisor.name}</td>
                {/* <td><Button variant="success">Update</Button></td> */}
                <td><Button variant="danger" onClick={()=> handleDeleteClick(intern.id)}>Delete</Button></td>
            </tr>)}
      </tbody>
    </Table>

            </div>
        </div>
    )
}

export default Interns;