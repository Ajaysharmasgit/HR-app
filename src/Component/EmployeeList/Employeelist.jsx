import { useState } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import "./EmployeeList.css"; 

const EmployeeList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div className="list">
      <button onClick={toggleLogin} className="login-button">
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>

      {isLoggedIn ? (
        <>
          <EmployeeCard name="Margit" role="teacher" department="ICT" initAge={20} startDate="1996" />
          <EmployeeCard name="Vera" role="teacher" department="ICT" initAge={16} startDate="2014" />
          <EmployeeCard name="Ilkka" role="teacher" department="ICT" initAge={90} startDate="2018" />
          <EmployeeCard name="Joonas" role="teacher" department="ICT" initAge={99} startDate="2012" />
          <EmployeeCard name="Santosh" role="teacher" department="ICT" initAge={19} startDate="2006" />
        </>
      ) : (
        <p>Please log in to view the employee list.</p>
      )}
    </div>
  );
};

export default EmployeeList;
