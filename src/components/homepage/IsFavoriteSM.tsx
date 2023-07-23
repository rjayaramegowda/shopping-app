import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { isFavorite, setFavorite } from "../../features/sizechart/sizeSlice";

function IsFavoriteSM() {
  const dispatch = useAppDispatch();
  const isFav = useAppSelector(isFavorite);
  return (
    <div className="position-absolute" style={{ top: 10, right: 30 }}>
      <button onClick={() => dispatch(setFavorite())} className="nav-link">
        <i
          className={
            isFav === true ? "fa fa-heart fa-lg" : "fa fa-heart-o fa-lg"
          }
          aria-hidden="true"
        ></i>
      </button>
    </div>
  );
}

export default IsFavoriteSM;
