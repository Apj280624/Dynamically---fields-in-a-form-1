import React, { useState } from "react";
import { nanoid } from "nanoid";

function Input(props) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);

    props.onChange(props.id, e.target.value);
  }

  function handleDeleteActivity() {
    props.handleDeleteActivity(props.id);
  }

  return (
    <div class="form-group row profile">
      <label htmlFor={props.id} className="col-sm-2 col-form-label">
        {props.label}
      </label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          name={props.name}
          placeholder={props.placeholder}
          onChange={handleChange}
          value={text}
        />
      </div>
      <button onClick={handleDeleteActivity}>-</button>
    </div>
  );
}

function ActivitySection() {
  const [list, setList] = useState([]);

  function updateList(id, task) {
    setList((prevList) => {
      return prevList.map((listItem) => {
        if (listItem.id === id) {
          listItem.task = task;
        }

        return listItem;
      });
    });

    // console.log(list);
  }

  function handleDeleteActivity(id) {
    setList((prevList) => {
      return prevList.filter((listItem) => {
        return listItem.id !== id;
      });
    });

    // console.log(list);
  }

  function handleAddActivity() {
    const newListItem = { id: nanoid(10), task: "" };

    setList((prevList) => {
      return [...prevList, newListItem];
    });

    // console.log(list);
  }

  return (
    <>
      <h1>Activity</h1>
      <button onClick={handleAddActivity}>+ Activity</button>
      <br />

      {list.map((listItem) => {
        return (
          <Input
            name="title"
            key={listItem.id}
            id={listItem.id}
            label="Title"
            placeholder="Title"
            onChange={updateList}
            handleDeleteActivity={handleDeleteActivity}
          />
        );
      })}

      <br />
    </>
  );
}

function App() {
  return (
    <>
      <ActivitySection />
    </>
  );
}

export default App;
