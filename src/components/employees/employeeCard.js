import React from "react";
import PropTypes from "prop-types";

const EmployeeCard = ({ employee: { name, deparment, address } }) => {
  const showSubAddresses = () => {
    let subAddressesValues = [];
    let subAddressesKeys = [];
    for (let i = 0; i < address.subAddresses.length; i++) {
      const element = address.subAddresses[i];
      subAddressesValues = [...subAddressesValues, Object.values(element)];
      subAddressesKeys = [...subAddressesKeys, Object.keys(element)];
    }
    // console.log(subAddressesKeys)
    return (
      <div className="sub-address">
        <ol>
          {subAddressesKeys.map((key) =>
            key.map((sub, i) => <li key={i}>{sub} </li>)
          )}
        </ol>
        <ol>
          {subAddressesValues.map((value) =>
            value.map((sub, i) => <li key={i}>{sub} </li>)
          )}
        </ol>
      </div>
    );
  };
  return (
    <div className="col-md-3">
      <div className="employee-card">
        <div className="front">
          <header>
            <img src="https://www.freevector.com/uploads/vector/preview/12675/FreeVector-Man-Vector-Avatar.jpg" alt="avatar" />
          </header>
          <h2>{name}</h2>
          <span>{deparment}</span>
        </div>
        <div className="back">
          <ul>
            <li>
              <span>country</span>: {address.country}{" "}
            </li>
            <li>
              <span>city</span>: {address.city}{" "}
            </li>
            <li>
              <span>street</span>: {address.street}{" "}
            </li>
            {address.subAddresses.length > 0 ? (
              <li>
                <span>subAddresses</span>: {showSubAddresses()}{" "}
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
EmployeeCard.propTypes = {
  employee: PropTypes.object.isRequired,
};
export default EmployeeCard;
