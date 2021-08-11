import React from "react";

const Input = ({ type, label }) => {
  return (
    <div>
      <label for="exampleInputPassword1">{label}</label>
      <input
        // style={{ width: "375px", height: "60" }}
        type={type}
        class="form-control"
        id="exampleInputPassword1"
      />
    </div>
  );
};

export default Input;
