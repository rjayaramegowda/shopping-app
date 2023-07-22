import React from "react";
import { isFavorite, setFavorite } from "../features/sizechart/sizeSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

function IsFavorite() {
  const dispatch = useAppDispatch();
  const isFav = useAppSelector(isFavorite);
  return (
    <div
      className="position-absolute border-4"
      style={{ top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <div className="position-relative w-100" style={{ height: "75%" }}>
        <div className="position-sticky me-3" style={{ top: 20 }}>
          <div className="text-end mt-5">
            <button
              onClick={() => dispatch(setFavorite())}
              className="nav-link"
            >
              <i
                className={
                  isFav === true ? "fa fa-heart fa-lg" : "fa fa-heart-o fa-lg"
                }
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IsFavorite;
