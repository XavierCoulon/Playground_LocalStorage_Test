import React, { useState, useRef, Fragment } from "react";
import { setLocalStorage, getLocalStorage } from "../utils/handleLocalStorage";

const LocalStorage = () => {
  const nameInputRef = useRef();
  const skillsInputRef = useRef();

  const [name, setName] = useState([]);
  const [skills, setSkills] = useState(getLocalStorage("skills"));

  const saveNameHandler = (event) => {
    event.preventDefault();
    setLocalStorage("name", nameInputRef.current.value);
    setName(getLocalStorage("name"));
    nameInputRef.current.value = "";
  };
  const saveSkillHandler = (event) => {
    event.preventDefault();
    setLocalStorage("skills", skillsInputRef.current.value);
    setSkills(getLocalStorage("skills"));
    skillsInputRef.current.value = "";
  };

  return (
    <Fragment>
      <h2>Hello {getLocalStorage("name") || "you!"}</h2>
      <form>
        <input type="text" placeholder="Your name" ref={nameInputRef} />
        <input type="submit" value="Save" onClick={saveNameHandler}></input>
      </form>
      <br />
      <form>
        <input type="text" placeholder="Add a skill" ref={skillsInputRef} />
        <input type="submit" value="Add" onClick={saveSkillHandler}></input>
      </form>
      <h2>Your skill(s):</h2>
      <ul>
        {skills && skills.map((skill) => (
          <li key={Math.random()}>{skill}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default LocalStorage;
