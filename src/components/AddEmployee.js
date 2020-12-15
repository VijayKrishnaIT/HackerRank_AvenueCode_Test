import React, { Fragment, useState } from "react";
const initState = {
  name: "",
  position: "",
  salary: "",
};
const AddEmployee = ({ addEmploy }) => {
  const [inputs, setInputVal] = useState(initState);

  const AddEmployee = () => {
    addEmploy(inputs);
    setInputVal(initState);
  };
  const onChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setInputVal((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  };

  return (
    <Fragment>
      <td className="pl-30">
        <input
          data-testid="new-employee-name-input"
          placeholder="Enter Name"
          name="name"
          onChange={onChange}
          value={inputs.name}
        />
      </td>
      <td className="pl-20">
        <input
          data-testid="new-employee-position-input"
          placeholder="Enter Position"
          name="position"
          onChange={onChange}
          value={inputs.position}
        />
      </td>
      <td className="pl-20">
        <input
          data-testid="new-employee-salary-input"
          type="number"
          placeholder="Enter Salary"
          name="salary"
          onChange={onChange}
          value={inputs.salary}
        />
      </td>
      <td className="pl-20">
        <button
          disabled={
            inputs.name === "" || inputs.position === "" || inputs.salary === ""
          }
          onClick={AddEmployee}
          data-testid="add-new-employee-button"
          className="x-small w-75 ma-0 px-25"
        >
          Add
        </button>
      </td>
    </Fragment>
  );
};

export default AddEmployee;
