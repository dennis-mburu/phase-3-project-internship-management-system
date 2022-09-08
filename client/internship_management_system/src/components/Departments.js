import React from "react";
import { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import DepartmentDetails from "./DepartmentDetails";
import DepartmentList from "./DepartmentList";


function Departments(){

    const[departments, setDepartments] = useState([])

    useEffect(() => {
    
        fetch("http://localhost:9292/departments")
    
        .then(res => res.json())
        .then(data => {
          setDepartments(data)
        })
      },[])


    return(
        <div>
            <DepartmentList departments={departments} />
        </div>
    )
}


export default Departments;