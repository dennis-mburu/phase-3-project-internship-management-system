import React from "react";
import { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import SupervisorList from "./SupervisorList";
import SupervisorDetails from "./SupervisorDetails";



function Supervisors (){

  const[supervisors, setSupervisors] = useState([])
  const match = useRouteMatch();

  useEffect(() => {
    
    fetch("http://localhost:9292/supervisors")
    // fetch("https://powerful-headland-71485.herokuapp.com/supervisors")

    .then(res => res.json())
    .then(data => {
      setSupervisors(data)
    })
  },[])

  // console.log(supervisors)
  

  return (
    <div>
      <SupervisorList supervisors={supervisors} />
      <Route path={`${match.url}/:supervisorId`}>
          <SupervisorDetails supervisors={supervisors}/>
      </Route>
    </div>
  )

}


export default Supervisors;




