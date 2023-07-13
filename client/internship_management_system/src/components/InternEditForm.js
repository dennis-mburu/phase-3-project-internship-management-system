import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function InternEditForm() {
  const params = useParams();
  const { id } = params;
  // console.log(id)
  const [intern, setIntern] = useState([]);
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("1");

  useEffect(() => {
    fetch(`http://localhost:9292/interns/${id}`)
      // fetch(`https://powerful-headland-71485.herokuapp.com/interns/${id}`)

      .then((res) => res.json())
      .then((data) => {
        setIntern(data);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/interns/${id}`, {
      // fetch(`https://powerful-headland-71485.herokuapp.com/interns/${id}`, {

      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        department: parseInt(department),
      }),
    })
      .then((res) => res.json())
      .then((newIntern) => {
        // setInterns([...interns, newIntern])
        console.log(newIntern);
        history.push("/interns");
      });
    setName("");
    setEmail("");
    setDepartment("1");
  }

  const int_name = intern.name;
  const int_email = intern.email;
  const int_id = intern.id;

  console.log(int_email, int_name);

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Intern's Name</th>
            <th>Intern's Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{int_id}</td>
            <td>{int_name}</td>
            <td>{int_email}</td>
          </tr>
        </tbody>
      </Table>

      <h4>Intern Edit Form</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Edit Intern's Name:
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter Intern's Name Here..."
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br></br>

        <label>
          Edit Intern's Email:
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter Intern's Email Here..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br></br>

        <label>
          Select Intern's Department:
          <select
            name="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
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
        </label>
        <br></br>

        <p>
          <em>
            - Intern's Supervisor will be randomly selected depending on their
            Availability
          </em>
        </p>

        <Button variant="success" type="submit">
          Edit Intern
        </Button>

        {/* <button type="submit">Add New Intern</button> */}
      </form>
    </div>
  );
}
