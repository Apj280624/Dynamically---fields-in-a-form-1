import React, { useState } from "react";

function Box(props) {
  return (
    <div className="form-inline">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={props.element.name || ""}
        onChange={(e) => props.handleChange(props.index, e)}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={props.element.email || ""}
        onChange={(e) => props.handleChange(props.index, e)}
      />
      {props.index ? (
        <button
          type="button"
          className="button remove"
          onClick={() => props.removeFormFields(props.index)}
        >
          Remove
        </button>
      ) : null}
    </div>
  );
}

function AddButton(props) {
  return (
    <div className="button-section">
      <button
        className="button add"
        type="button"
        onClick={() => props.addFormFields()}
      >
        Add
      </button>
      <button className="button submit" type="submit">
        Submit
      </button>
    </div>
  );
}

const Form2 = () => {
  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);

  let handleChange = (i, e) => {
    // let newFormValues = [...formValues];
    // newFormValues[i][e.target.name] = e.target.value;
    // setFormValues(newFormValues);

    setFormValues((prevFormValues) => {
      let newFormValues = [...formValues];
      newFormValues[i][e.target.name] = e.target.value;
      console.log(newFormValues);

      return newFormValues;
    });
  };

  let addFormFields = () => {
    setFormValues((prevFormValues) => {
      let newFormValues = [...prevFormValues, { name: "", email: "" }];
      console.log(newFormValues);

      return newFormValues;
    });
  };

  let removeFormFields = (i) => {
    setFormValues((prevFormValues) => {
      let newFormValues = [...prevFormValues];
      newFormValues.splice(i, 1);
      console.log(newFormValues);

      return newFormValues;
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <form onSubmit={handleSubmit}>
      <AddButton addFormFields={addFormFields} />
      <br />

      {formValues.map((element, index) => (
        <Box
          key={index}
          index={index}
          element={element}
          handleChange={handleChange}
          removeFormFields={removeFormFields}
        />
      ))}
    </form>
  );
};

export default Form2;
