import EmployeeCard from "../EmployeeCard/Employeecard.jsx";

const EmployeeList = () => {
  return (
    <div>
      <h2>I am the list</h2>
      <EmployeeCard name="Ajay" initRole="drifter" dep="drifting" />
      <EmployeeCard name="Joonas" initRole="Teacher" dep="ICT" />
      <EmployeeCard name="Santosh" initRole="Teacher" dep="ICT" />
      <EmployeeCard name="Margit" initRole="Teacher" dep="ICT" />
      <EmployeeCard name="Vera" initRole="Teacher" dep="ICT" />
    </div>
  );
};

export default EmployeeList;
