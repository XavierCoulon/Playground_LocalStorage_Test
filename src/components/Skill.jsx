import React, { Fragment, useState, useEffect } from "react";
import {
  setLocalStorage,
  getLocalStorage,
  removeItemLocalStorage,
} from "../utils/handleLocalStorage";

const Skill = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(getLocalStorage("favorite").includes(props.skill));
  },[props.skill]);

  const handleClickFavorite = () => {
    isFavorite
      ? removeItemLocalStorage("favorite", props.skill)
      : setLocalStorage("favorite", props.skill);

    setIsFavorite((state) => !state);
  };

  return (
    <Fragment>
      <div className="skillCard">
        <h3>{props.skill}</h3>
        <div
          id="favorite"
          className={isFavorite ? "isFavorite" : "notFavorite"}
          onClick={handleClickFavorite}
        ></div>
      </div>
    </Fragment>
  );
};

export default Skill;
