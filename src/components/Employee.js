import React, { Fragment, useState } from "react";

const Employee = ({ employee, updateEmpSalary }) => {
  const { name, position, salary, id } = employee;
  const [isClicked, setIsClicked] = useState(false);
  const [inputVal, setInputVal] = useState(salary);
  const onSave = () => {
    updateEmpSalary(id, inputVal);
    setIsClicked(false);
  };

  return (
    <Fragment>
      <td>{name}</td>
      <td className="pl-20">{position}</td>
      <td className="pl-20">
        {!isClicked && (
          <div
            data-testid={"employee-salary-div-" + id}
            onClick={() => setIsClicked(true)}
          >
            {salary}
          </div>
        )}
        {/* use this block of code when the salary field becomes editable */}
        {isClicked && (
          <input
            data-testid={"employee-salary-input-" + id}
            type="number"
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
          />
        )}
      </td>
      <td className="pl-20">
        <button
          disabled={salary === inputVal}
          onClick={onSave}
          className={"x-small w-75 ma-0 px-25"}
          data-testid={"employee-save-button-" + id}
        >
          Save
        </button>
      </td>
    </Fragment>
  );
};

export default Employee;
