import React, { useState, useRef, Fragment } from "react";
import { setLocalStorage, getLocalStorage } from "../utils/handleLocalStorage";
import Skill from "./Skill";

const LocalStorage = () => {
  const skillsInputRef = useRef();
  const [skills, setSkills] = useState(getLocalStorage("skills"));

  const saveSkillHandler = (event) => {
    event.preventDefault();
    setLocalStorage("skills", skillsInputRef.current.value);
    setSkills(getLocalStorage("skills"));
    skillsInputRef.current.value = "";
  };

  return (
    <Fragment>
      <form>
        <input type="text" placeholder="Add a skill" ref={skillsInputRef} />
        <input type="submit" value="Add" onClick={saveSkillHandler}></input>
      </form>
      <h2>Your skill(s):</h2>
      
        {skills &&
          skills.map((skill) => <Skill key={Math.random()} skill={skill} />)}
      
    </Fragment>
  );
};

export default LocalStorage;
