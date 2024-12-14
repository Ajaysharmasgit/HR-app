import { useState } from "react";
import "./EmployeeCard.css";  // This should be EmployeeCard.css
import './EmployeeCard.css';  // Adjusted import

const EmployeeCard = (props) => {
  const [age, setAge] = useState(props.initAge);

  const clickHandler = () => {
    if (age <= "18") {
      setAge(props.initAge);
    } else {
      setAge("Team Lead");
    }
  };

  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <p>Role: {props.role}</p>
      <p>Department: {props.department}</p>
      <p>Age: {age}</p>
      <p>Start Date: {props.startDate}</p>
      <button onClick={clickHandler}>Promote</button>
    </div>
  );
};

export default EmployeeCard;
