import React, { Fragment, useState, useEffect } from "react";
import { storage } from "../utils/handleLocalStorage";

const Skill = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (
      storage.get("favorite") &&
      storage.get("favorite").includes(props.skill)
    )
      setIsFavorite(true);
  }, [props.skill]);

  const handleClickFavorite = () => {
    isFavorite
      ? storage.remove("favorite", props.skill)
      : storage.set("favorite", props.skill);

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
