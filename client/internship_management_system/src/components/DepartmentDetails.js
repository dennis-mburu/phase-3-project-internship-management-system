import React from "react";
import { useParams } from "react-router-dom";


function DepartmentDetails({departments}){

    const params = useParams();
    console.log(params)
    return(
        <div>
            <h4>Department Details Component</h4>
            <h3>{departments[params.departmentId].specification}</h3>
        </div>
    )
}

export default DepartmentDetails;