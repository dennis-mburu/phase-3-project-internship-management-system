import React from "react";
import { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import DepartmentDetails from "./DepartmentDetails";
import DepartmentList from "./DepartmentList";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const match = useRouteMatch();
  console.log(match);

  useEffect(() => {
    fetch("http://localhost:9292/departments")
      // fetch("https://powerful-headland-71485.herokuapp.com/departments")

      .then((res) => res.json())
      .then((data) => {
        setDepartments(data);
      });
  }, []);

  return (
    <div>
      <DepartmentList
        departments={departments}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
      {/* <Route path={`${match.url}/:departmentId`}> */}
      <Route path="/departments/:departmentId">
        {showDetails ? <DepartmentDetails departments={departments} /> : null}

        {/* <DepartmentDetails departments={departments}/> */}
      </Route>
    </div>
  );
}

export default Departments;
