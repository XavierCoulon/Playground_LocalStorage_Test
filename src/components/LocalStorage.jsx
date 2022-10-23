import React, { useState, useRef } from "react";
import setLocalStorage from "../utils/handleLocalStorage";

const LocalStorage = () => {
  const nameInputRef = useRef();
  const skillsInputRef = useRef();

  const saveNameHandler = (event) => {
    event.preventDefault();
    setLocalStorage("name", nameInputRef.current.value);
  };
  const saveSkillHandler = (event) => {
    event.preventDefault();
    setLocalStorage("skills", skillsInputRef.current.value);
  };

  return (
    <div>
      <h2>Hello {localStorage.getItem("name") || "you"}</h2>
      <form>
        <input type="text" placeholder="Your name" ref={nameInputRef} />
        <input type="submit" value="Save" onClick={saveNameHandler}></input>
      </form>
      <h2>Your skill: {localStorage.getItem("skills")}</h2>
      <form>
        <input type="text" placeholder="Add a skill" ref={skillsInputRef} />
        <input type="submit" value="Add" onClick={saveSkillHandler}></input>
      </form>
    </div>
  );
};

export default LocalStorage;
