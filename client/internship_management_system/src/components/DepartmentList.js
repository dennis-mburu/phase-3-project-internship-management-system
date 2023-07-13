import React from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";




function DepartmentList({departments, showDetails, setShowDetails}){


    return(
        <div>
          <h4>Click on a Department to View More Information</h4>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>Department Specialization</th>
          <th>Department Requirements</th>
        </tr>
      </thead>
      <tbody>{departments.map(department => 
        // <tr key={department.id} >
        <tr key={department.id} onClick={() => setShowDetails(!showDetails)}> 


          <td><Link to={`/departments/${department.id}`}>{department.id}</Link></td>
          <td><Link to={`/departments/${department.id}`}>{department.specification}</Link></td>
          <td><Link to={`/departments/${department.id}`}>{department.requirements}</Link></td>
        </tr>)}

      </tbody>
    </Table>
            
        </div>
    )


}

export default DepartmentList


