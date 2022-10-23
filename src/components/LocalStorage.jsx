import React, { useState, useRef, Fragment } from "react";
import setLocalStorage from "../utils/handleLocalStorage";

const LocalStorage = () => {
  const nameInputRef = useRef();
  const skillsInputRef = useRef();

  const [name, setName] = useState();
  const [skills, setSkills] = useState();

  const saveNameHandler = (event) => {
    event.preventDefault();
    setLocalStorage("name", nameInputRef.current.value);
    setName(localStorage.getItem("name"));
    nameInputRef.current.value = "";
  };
  const saveSkillHandler = (event) => {
    event.preventDefault();
    setLocalStorage("skills", skillsInputRef.current.value);
    setSkills(localStorage.getItem("skills"));
    skillsInputRef.current.value = "";
  };

  return (
    <Fragment>
      <h2>Hello {localStorage.getItem("name") || "you!"}</h2>
      <form>
        <input type="text" placeholder="Your name" ref={nameInputRef} />
        <input type="submit" value="Save" onClick={saveNameHandler}></input>
      </form>
      <h2>Your skill(s): {skills || "none"}</h2>
      <form>
        <input type="text" placeholder="Add a skill" ref={skillsInputRef} />
        <input type="submit" value="Add" onClick={saveSkillHandler}></input>
      </form>
    </Fragment>
  );
};

export default LocalStorage;
