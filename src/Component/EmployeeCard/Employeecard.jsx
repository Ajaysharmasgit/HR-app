import { useState } from "react";

const EmployeeCard = (props) => {
  const [role, setRole] = useState(props.initRole);

  const clickHandler = ()=> {
    if (role === "team-leader") {
        setRole(props.initRole);
    } else {
        setRole("go home now");
    }
    
};

  return (
    <div className="card">
      <p>Name:{props.name}</p>
      <p> Role:{role}</p>
      <p>Dep:{props.dep}</p>
      <button onClick={clickHandler}>Promote</button>
    </div>
  );
};


export default EmployeeCard;

