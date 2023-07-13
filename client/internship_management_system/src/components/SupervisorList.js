import React from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';



function SupervisorList({supervisors, showDetails, setShowDetails}){


    return(
        <div>
          <h4>Click on a supervisor to view More Information</h4>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>Supervisor Name</th>
          <th>Supervisor Email</th>
          <th>Exp in Years</th>
        </tr>
      </thead>
      <tbody>{supervisors.map(supervisor => 
        <tr key={supervisor.id} onClick={() => setShowDetails(!showDetails)}>
          <td><Link to={`/supervisors/${supervisor.id}`}>{supervisor.id}</Link></td>
          <td><Link to={`/supervisors/${supervisor.id}`}>{supervisor.name}</Link></td>
          <td><Link to={`/supervisors/${supervisor.id}`}>{supervisor.email}</Link></td>
          <td><Link to={`/supervisors/${supervisor.id}`}>{supervisor.work_experience_in_years}</Link></td>
        </tr>)}

      </tbody>
    </Table>
            
        </div>
    )}

    export default SupervisorList