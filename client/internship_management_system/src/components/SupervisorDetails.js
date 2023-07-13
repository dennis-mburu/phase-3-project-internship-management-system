import React from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";

function SupervisorDetails({ supervisors }) {
  const params = useParams();

  return (
    <div>
      <h4>{supervisors[params.supervisorId - 1].name}'s Interns</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Intern's Name</th>
            <th>Intern's Email</th>
          </tr>
        </thead>
        <tbody>
          {supervisors[params.supervisorId - 1].interns.map((intern) => (
            <tr key={intern.id}>
              <td>{intern.name}</td>
              <td>{intern.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4>{supervisors[params.supervisorId - 1].name}'s Departments</h4>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {supervisors[params.supervisorId - 1].departments.map(
            (department) => (
              <tr key={department.id}>
                <td>{department.specification}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default SupervisorDetails;
