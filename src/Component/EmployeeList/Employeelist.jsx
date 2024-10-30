import EmployeeCard from "../EmployeeCard/Employeecard.jsx";

const EmployeeList = () => {
  return (
    <div>
      <h2>I am the list</h2>
      <EmployeeCard name="margit" initRole="teacher" dep="ICT" />
      <EmployeeCard name="vera" initRole="teacher" dep="ICT" />
      <EmployeeCard name="santosh" initRole="teacher" dep="ICT" />
    </div>
  );
};

export default EmployeeList;
