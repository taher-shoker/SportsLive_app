import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getEmployees } from "../../action/employeeActions";
import { connect } from "react-redux";
import EmployeeCard from "./employeeCard";

const Employees = ({ getEmployees, employee: { employees } }) => {
  useEffect(() => {
    getEmployees();
  }, [getEmployees]);
  return (
      <>
     
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          {employees.length > 0 ? (
            employees.map((employee) => <EmployeeCard key={employee.id} employee={employee} />)
          ) : (
            <>
              {" "}
              <h4>There Is No employees </h4>{" "}
            </>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

Employees.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  employee: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  employee: state.employee
});

export default connect(mapStateToProps, { getEmployees })(Employees);
