import React from "react";

const FormComponent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("form submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </label>
      </form>
      <input type="submit" />
    </div>
  );
};

export default FormComponent;
