import React from "react";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';



function DepartmentDetails({departments}){

    const params = useParams();
    // console.log(params)
    return(
        <div>
            <h4>{departments[params.departmentId -1].specification} Department Supervisors</h4>
            <div className="customTable">
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Supervisors in Department</th>
          <th>Supervisor's Email</th>
        </tr>
      </thead>
      <tbody>{departments[params.departmentId -1].supervisors.map(supervisor => 
        <tr key={supervisor.id}>
          <td>{supervisor.name}</td>
          <td>{supervisor.email}</td>

        </tr>)}
      </tbody>
      
    </Table>

    <h4>{departments[params.departmentId -1].specification} Department Interns</h4>


    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Interns in Department</th>
          <th>Intern's Email</th>

        </tr>
      </thead>
      <tbody>{departments[params.departmentId -1].interns.map(intern => 
        <tr key={intern.id}>
          <td>{intern.name}</td>
          <td>{intern.email}</td>

        </tr>)}
      </tbody>
      
    </Table>
            </div>
        </div>
    )
}

export default DepartmentDetails;