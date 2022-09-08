import React from "react";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";



function Interns (){


    const[interns, setInterns] = useState([])

    useEffect(() => {
    
        fetch("http://localhost:9292/interns")
    
        .then(res => res.json())
        .then(data => {
          setInterns(data)
        })
      },[])

    //   console.log(interns)

    return (
        <div>
            <div>This is the interns page</div>
            <div>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>Intern's Name</th>
          <th>Intern's Email</th>
          <th>Intern's Department</th>
        </tr>
      </thead>
      <tbody>
        {interns.map(intern => <tr key={intern.id}>
                <td>{intern.id}</td>
                <td>{intern.name}</td>
                <td>{intern.email}</td>
                <td>{intern.department.specification}</td>
            </tr>)}
      </tbody>
    </Table>

            </div>
        </div>
    )
}

export default Interns;