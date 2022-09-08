import React from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';



function DepartmentList({departments}){


    return(
        <div>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>Department Specialization</th>
          <th>Department Requirements</th>
        </tr>
      </thead>
      <tbody>{departments.map(department => 
        <tr key={department.id}>
          <td><Link to={`/departments/${department.id}`}>{department.id}</Link></td>
          <td><Link to={`/departments/${department.id}`}>{department.specification}</Link></td>
          <td><Link to={`/departments/${department.id}`}>{department.requirements}</Link></td>
        </tr>)}

      </tbody>
    </Table>
            
        </div>

    )

    // return (
    //     <div>
    //         <ol>{departments.map(department => <li key={department.id}>
    //             <Link to={`/departments/${department.id}`}>{department.specification}</Link>
    //             <Link to={`/departments/${department.id}`}>{department.specification}</Link>

    //             <span>{department.requirements}</span>
    //         </li>)}

    //         </ol>
    //     </div>
    // )

}

export default DepartmentList


