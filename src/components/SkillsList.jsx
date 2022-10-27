import React, { useState, useRef, Fragment } from "react";
import { storage } from "../utils/handleLocalStorage";
import Skill from "./Skill";

const LocalStorage = () => {
  const skillsInputRef = useRef();
  const [skills, setSkills] = useState(storage.get("skills"));

  const saveSkillHandler = (event) => {
    event.preventDefault();
    storage.set("skills", skillsInputRef.current.value);
    setSkills(storage.get("skills"));
    skillsInputRef.current.value = "";
  };

  return (
    <Fragment>
      <form>
        <input type="text" placeholder="Add a skill" ref={skillsInputRef} />
        <input type="submit" value="Add" onClick={saveSkillHandler}></input>
      </form>
      <h2>Your skill(s), stored in LocalStorage 😉</h2>

      {skills &&
        skills.map((skill) => <Skill key={Math.random()} skill={skill} />)}
    </Fragment>
  );
};

export default LocalStorage;
